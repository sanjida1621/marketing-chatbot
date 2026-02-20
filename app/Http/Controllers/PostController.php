<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Http;

class PostController extends Controller
{
    public function index()
    {
        $user = auth()->user();

        if ($user->hasRole('manager')) {
            $posts = Post::latest()->get();
        } else {
            $posts = Post::where('created_by', $user->id)
                ->latest()
                ->get();
        }

        return Inertia::render('posts/Index', [
            'posts' => $posts,
            'isManager' => $user->hasRole('manager'),
            'userId' => $user->id,
        ]);
    }
    public function approve(Post $post)
    {
        // if (!auth()->user()->hasRole('manager')) {
        //     abort(403);
        // }

        $response = Http::post('https://sanjida1264.app.n8n.cloud/webhook/approve-post', [
            'post_id' => $post->id,
            'copy' => $post->copy,
            'platforms' => $post->platforms, // this is JSON array
        ]);

        if ($response->failed()) {
            return back()->with('error', 'Approval workflow failed.');
        }

        return redirect()
            ->route('posts.index')
            ->with('success', 'Post approved and sent for publishing.');
    }

    public function edit(Post $post)
    {
        $user = auth()->user();

        if (
            !$user->hasRole('manager') &&
            $post->created_by !== $user->id
        ) {
            abort(403);
        }

        return Inertia::render('posts/Edit', [
            'post' => $post,
        ]);
    }

    public function update(Request $request, Post $post)
    {
        $user = auth()->user();

        if (
            !$user->hasRole('manager') &&
            $post->created_by !== $user->id
        ) {
            abort(403);
        }

        if (!in_array($post->status, ['draft', 'pending']) && !$user->hasRole('manager')) {
            abort(403, 'Only draft or pending posts can be edited by general users.');
        }

        $validated = $request->validate([
            'copy' => 'required|string|max:5000',
            'platforms' => 'nullable|array',
            'platforms.*' => 'string|in:facebook,linkedin',
            'scheduled_time' => 'nullable|date_format:Y-m-d\TH:i',
            'assets' => 'nullable|url',
        ]);

        // Convert assets to JSON if provided
        if (!empty($validated['assets'])) {
            $validated['assets'] = json_encode([$validated['assets']]);
        } else {
            $validated['assets'] = null;
        }

        $post->update($validated);

        return redirect()
            ->route('posts.index')
            ->with('success', 'Post updated successfully.');
    }

    public function destroy(Post $post)
    {
        $user = auth()->user();

        if (
            !$user->hasRole('manager') &&
            $post->created_by !== $user->id
        ) {
            abort(403);
        }

        if (!in_array($post->status, ['draft', 'pending']) && !$user->hasRole('manager')) {
            abort(403, 'Only draft or pending posts can be deleted by general users.');
        }

        $post->delete();

        return redirect()
            ->route('posts.index')
            ->with('success', 'Post deleted successfully.');
    }
}
