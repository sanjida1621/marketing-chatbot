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
            'isManager' => $user->hasRole('manager')
        ]);
    }
    public function approve(Post $post)
    {
        if (!auth()->user()->hasRole('manager')) {
            abort(403);
        }

        $response = Http::post('https://sanjida1264.app.n8n.cloud/webhook-test/approve-post', [
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

    public function destroy(Post $post)
    {
        $user = auth()->user();

        if (
            !$user->hasRole('manager') &&
            $post->created_by !== $user->id
        ) {
            abort(403);
        }

        if ($post->status !== 'pending_confirmation') {
            abort(403);
        }

        $post->delete();

        return redirect()
            ->route('posts.index')
            ->with('success', 'Post deleted successfully.');
    }
}
