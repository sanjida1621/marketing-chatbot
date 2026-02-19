import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\PostController::index
 * @see app/Http/Controllers/PostController.php:12
 * @route '/api/posts'
 */
const indexbf19ef06ce1388ecdeb1fea63820e3bd = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexbf19ef06ce1388ecdeb1fea63820e3bd.url(options),
    method: 'get',
})

indexbf19ef06ce1388ecdeb1fea63820e3bd.definition = {
    methods: ["get","head"],
    url: '/api/posts',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PostController::index
 * @see app/Http/Controllers/PostController.php:12
 * @route '/api/posts'
 */
indexbf19ef06ce1388ecdeb1fea63820e3bd.url = (options?: RouteQueryOptions) => {
    return indexbf19ef06ce1388ecdeb1fea63820e3bd.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PostController::index
 * @see app/Http/Controllers/PostController.php:12
 * @route '/api/posts'
 */
indexbf19ef06ce1388ecdeb1fea63820e3bd.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexbf19ef06ce1388ecdeb1fea63820e3bd.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PostController::index
 * @see app/Http/Controllers/PostController.php:12
 * @route '/api/posts'
 */
indexbf19ef06ce1388ecdeb1fea63820e3bd.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexbf19ef06ce1388ecdeb1fea63820e3bd.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PostController::index
 * @see app/Http/Controllers/PostController.php:12
 * @route '/api/posts'
 */
    const indexbf19ef06ce1388ecdeb1fea63820e3bdForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: indexbf19ef06ce1388ecdeb1fea63820e3bd.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PostController::index
 * @see app/Http/Controllers/PostController.php:12
 * @route '/api/posts'
 */
        indexbf19ef06ce1388ecdeb1fea63820e3bdForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: indexbf19ef06ce1388ecdeb1fea63820e3bd.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PostController::index
 * @see app/Http/Controllers/PostController.php:12
 * @route '/api/posts'
 */
        indexbf19ef06ce1388ecdeb1fea63820e3bdForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: indexbf19ef06ce1388ecdeb1fea63820e3bd.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    indexbf19ef06ce1388ecdeb1fea63820e3bd.form = indexbf19ef06ce1388ecdeb1fea63820e3bdForm
    /**
* @see \App\Http\Controllers\PostController::index
 * @see app/Http/Controllers/PostController.php:12
 * @route '/posts'
 */
const indexffe23c0a02d17880937946bd4b1439a4 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexffe23c0a02d17880937946bd4b1439a4.url(options),
    method: 'get',
})

indexffe23c0a02d17880937946bd4b1439a4.definition = {
    methods: ["get","head"],
    url: '/posts',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PostController::index
 * @see app/Http/Controllers/PostController.php:12
 * @route '/posts'
 */
indexffe23c0a02d17880937946bd4b1439a4.url = (options?: RouteQueryOptions) => {
    return indexffe23c0a02d17880937946bd4b1439a4.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PostController::index
 * @see app/Http/Controllers/PostController.php:12
 * @route '/posts'
 */
indexffe23c0a02d17880937946bd4b1439a4.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexffe23c0a02d17880937946bd4b1439a4.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PostController::index
 * @see app/Http/Controllers/PostController.php:12
 * @route '/posts'
 */
indexffe23c0a02d17880937946bd4b1439a4.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexffe23c0a02d17880937946bd4b1439a4.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PostController::index
 * @see app/Http/Controllers/PostController.php:12
 * @route '/posts'
 */
    const indexffe23c0a02d17880937946bd4b1439a4Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: indexffe23c0a02d17880937946bd4b1439a4.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PostController::index
 * @see app/Http/Controllers/PostController.php:12
 * @route '/posts'
 */
        indexffe23c0a02d17880937946bd4b1439a4Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: indexffe23c0a02d17880937946bd4b1439a4.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PostController::index
 * @see app/Http/Controllers/PostController.php:12
 * @route '/posts'
 */
        indexffe23c0a02d17880937946bd4b1439a4Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: indexffe23c0a02d17880937946bd4b1439a4.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    indexffe23c0a02d17880937946bd4b1439a4.form = indexffe23c0a02d17880937946bd4b1439a4Form

export const index = {
    '/api/posts': indexbf19ef06ce1388ecdeb1fea63820e3bd,
    '/posts': indexffe23c0a02d17880937946bd4b1439a4,
}

/**
* @see \App\Http\Controllers\PostController::approve
 * @see app/Http/Controllers/PostController.php:30
 * @route '/api/posts/{post}/approve'
 */
const approve64fba1e0aae352eca5631cb99bc65b22 = (args: { post: string | { id: string } } | [post: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: approve64fba1e0aae352eca5631cb99bc65b22.url(args, options),
    method: 'post',
})

approve64fba1e0aae352eca5631cb99bc65b22.definition = {
    methods: ["post"],
    url: '/api/posts/{post}/approve',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\PostController::approve
 * @see app/Http/Controllers/PostController.php:30
 * @route '/api/posts/{post}/approve'
 */
approve64fba1e0aae352eca5631cb99bc65b22.url = (args: { post: string | { id: string } } | [post: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { post: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { post: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    post: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        post: typeof args.post === 'object'
                ? args.post.id
                : args.post,
                }

    return approve64fba1e0aae352eca5631cb99bc65b22.definition.url
            .replace('{post}', parsedArgs.post.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PostController::approve
 * @see app/Http/Controllers/PostController.php:30
 * @route '/api/posts/{post}/approve'
 */
approve64fba1e0aae352eca5631cb99bc65b22.post = (args: { post: string | { id: string } } | [post: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: approve64fba1e0aae352eca5631cb99bc65b22.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\PostController::approve
 * @see app/Http/Controllers/PostController.php:30
 * @route '/api/posts/{post}/approve'
 */
    const approve64fba1e0aae352eca5631cb99bc65b22Form = (args: { post: string | { id: string } } | [post: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: approve64fba1e0aae352eca5631cb99bc65b22.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PostController::approve
 * @see app/Http/Controllers/PostController.php:30
 * @route '/api/posts/{post}/approve'
 */
        approve64fba1e0aae352eca5631cb99bc65b22Form.post = (args: { post: string | { id: string } } | [post: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: approve64fba1e0aae352eca5631cb99bc65b22.url(args, options),
            method: 'post',
        })
    
    approve64fba1e0aae352eca5631cb99bc65b22.form = approve64fba1e0aae352eca5631cb99bc65b22Form
    /**
* @see \App\Http\Controllers\PostController::approve
 * @see app/Http/Controllers/PostController.php:30
 * @route '/posts/{post}/approve'
 */
const approveea07b57d12c1cd38d59a9cec14c5c3f4 = (args: { post: string | { id: string } } | [post: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: approveea07b57d12c1cd38d59a9cec14c5c3f4.url(args, options),
    method: 'post',
})

approveea07b57d12c1cd38d59a9cec14c5c3f4.definition = {
    methods: ["post"],
    url: '/posts/{post}/approve',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\PostController::approve
 * @see app/Http/Controllers/PostController.php:30
 * @route '/posts/{post}/approve'
 */
approveea07b57d12c1cd38d59a9cec14c5c3f4.url = (args: { post: string | { id: string } } | [post: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { post: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { post: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    post: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        post: typeof args.post === 'object'
                ? args.post.id
                : args.post,
                }

    return approveea07b57d12c1cd38d59a9cec14c5c3f4.definition.url
            .replace('{post}', parsedArgs.post.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PostController::approve
 * @see app/Http/Controllers/PostController.php:30
 * @route '/posts/{post}/approve'
 */
approveea07b57d12c1cd38d59a9cec14c5c3f4.post = (args: { post: string | { id: string } } | [post: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: approveea07b57d12c1cd38d59a9cec14c5c3f4.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\PostController::approve
 * @see app/Http/Controllers/PostController.php:30
 * @route '/posts/{post}/approve'
 */
    const approveea07b57d12c1cd38d59a9cec14c5c3f4Form = (args: { post: string | { id: string } } | [post: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: approveea07b57d12c1cd38d59a9cec14c5c3f4.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PostController::approve
 * @see app/Http/Controllers/PostController.php:30
 * @route '/posts/{post}/approve'
 */
        approveea07b57d12c1cd38d59a9cec14c5c3f4Form.post = (args: { post: string | { id: string } } | [post: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: approveea07b57d12c1cd38d59a9cec14c5c3f4.url(args, options),
            method: 'post',
        })
    
    approveea07b57d12c1cd38d59a9cec14c5c3f4.form = approveea07b57d12c1cd38d59a9cec14c5c3f4Form

export const approve = {
    '/api/posts/{post}/approve': approve64fba1e0aae352eca5631cb99bc65b22,
    '/posts/{post}/approve': approveea07b57d12c1cd38d59a9cec14c5c3f4,
}

/**
* @see \App\Http\Controllers\PostController::destroy
 * @see app/Http/Controllers/PostController.php:104
 * @route '/api/posts/{post}'
 */
const destroy1d260b89dbe6a70b86efaca1397e9cdb = (args: { post: string | { id: string } } | [post: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy1d260b89dbe6a70b86efaca1397e9cdb.url(args, options),
    method: 'delete',
})

destroy1d260b89dbe6a70b86efaca1397e9cdb.definition = {
    methods: ["delete"],
    url: '/api/posts/{post}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\PostController::destroy
 * @see app/Http/Controllers/PostController.php:104
 * @route '/api/posts/{post}'
 */
destroy1d260b89dbe6a70b86efaca1397e9cdb.url = (args: { post: string | { id: string } } | [post: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { post: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { post: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    post: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        post: typeof args.post === 'object'
                ? args.post.id
                : args.post,
                }

    return destroy1d260b89dbe6a70b86efaca1397e9cdb.definition.url
            .replace('{post}', parsedArgs.post.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PostController::destroy
 * @see app/Http/Controllers/PostController.php:104
 * @route '/api/posts/{post}'
 */
destroy1d260b89dbe6a70b86efaca1397e9cdb.delete = (args: { post: string | { id: string } } | [post: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy1d260b89dbe6a70b86efaca1397e9cdb.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\PostController::destroy
 * @see app/Http/Controllers/PostController.php:104
 * @route '/api/posts/{post}'
 */
    const destroy1d260b89dbe6a70b86efaca1397e9cdbForm = (args: { post: string | { id: string } } | [post: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy1d260b89dbe6a70b86efaca1397e9cdb.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PostController::destroy
 * @see app/Http/Controllers/PostController.php:104
 * @route '/api/posts/{post}'
 */
        destroy1d260b89dbe6a70b86efaca1397e9cdbForm.delete = (args: { post: string | { id: string } } | [post: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy1d260b89dbe6a70b86efaca1397e9cdb.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy1d260b89dbe6a70b86efaca1397e9cdb.form = destroy1d260b89dbe6a70b86efaca1397e9cdbForm
    /**
* @see \App\Http\Controllers\PostController::destroy
 * @see app/Http/Controllers/PostController.php:104
 * @route '/posts/{post}'
 */
const destroyc395459ca515ed879b20f00485b90185 = (args: { post: string | { id: string } } | [post: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyc395459ca515ed879b20f00485b90185.url(args, options),
    method: 'delete',
})

destroyc395459ca515ed879b20f00485b90185.definition = {
    methods: ["delete"],
    url: '/posts/{post}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\PostController::destroy
 * @see app/Http/Controllers/PostController.php:104
 * @route '/posts/{post}'
 */
destroyc395459ca515ed879b20f00485b90185.url = (args: { post: string | { id: string } } | [post: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { post: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { post: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    post: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        post: typeof args.post === 'object'
                ? args.post.id
                : args.post,
                }

    return destroyc395459ca515ed879b20f00485b90185.definition.url
            .replace('{post}', parsedArgs.post.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PostController::destroy
 * @see app/Http/Controllers/PostController.php:104
 * @route '/posts/{post}'
 */
destroyc395459ca515ed879b20f00485b90185.delete = (args: { post: string | { id: string } } | [post: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyc395459ca515ed879b20f00485b90185.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\PostController::destroy
 * @see app/Http/Controllers/PostController.php:104
 * @route '/posts/{post}'
 */
    const destroyc395459ca515ed879b20f00485b90185Form = (args: { post: string | { id: string } } | [post: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroyc395459ca515ed879b20f00485b90185.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PostController::destroy
 * @see app/Http/Controllers/PostController.php:104
 * @route '/posts/{post}'
 */
        destroyc395459ca515ed879b20f00485b90185Form.delete = (args: { post: string | { id: string } } | [post: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroyc395459ca515ed879b20f00485b90185.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroyc395459ca515ed879b20f00485b90185.form = destroyc395459ca515ed879b20f00485b90185Form

export const destroy = {
    '/api/posts/{post}': destroy1d260b89dbe6a70b86efaca1397e9cdb,
    '/posts/{post}': destroyc395459ca515ed879b20f00485b90185,
}

/**
* @see \App\Http\Controllers\PostController::edit
 * @see app/Http/Controllers/PostController.php:51
 * @route '/posts/{post}/edit'
 */
export const edit = (args: { post: string | { id: string } } | [post: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/posts/{post}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PostController::edit
 * @see app/Http/Controllers/PostController.php:51
 * @route '/posts/{post}/edit'
 */
edit.url = (args: { post: string | { id: string } } | [post: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { post: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { post: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    post: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        post: typeof args.post === 'object'
                ? args.post.id
                : args.post,
                }

    return edit.definition.url
            .replace('{post}', parsedArgs.post.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PostController::edit
 * @see app/Http/Controllers/PostController.php:51
 * @route '/posts/{post}/edit'
 */
edit.get = (args: { post: string | { id: string } } | [post: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PostController::edit
 * @see app/Http/Controllers/PostController.php:51
 * @route '/posts/{post}/edit'
 */
edit.head = (args: { post: string | { id: string } } | [post: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PostController::edit
 * @see app/Http/Controllers/PostController.php:51
 * @route '/posts/{post}/edit'
 */
    const editForm = (args: { post: string | { id: string } } | [post: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PostController::edit
 * @see app/Http/Controllers/PostController.php:51
 * @route '/posts/{post}/edit'
 */
        editForm.get = (args: { post: string | { id: string } } | [post: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PostController::edit
 * @see app/Http/Controllers/PostController.php:51
 * @route '/posts/{post}/edit'
 */
        editForm.head = (args: { post: string | { id: string } } | [post: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    edit.form = editForm
/**
* @see \App\Http\Controllers\PostController::update
 * @see app/Http/Controllers/PostController.php:67
 * @route '/posts/{post}'
 */
export const update = (args: { post: string | { id: string } } | [post: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

update.definition = {
    methods: ["patch"],
    url: '/posts/{post}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\PostController::update
 * @see app/Http/Controllers/PostController.php:67
 * @route '/posts/{post}'
 */
update.url = (args: { post: string | { id: string } } | [post: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { post: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { post: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    post: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        post: typeof args.post === 'object'
                ? args.post.id
                : args.post,
                }

    return update.definition.url
            .replace('{post}', parsedArgs.post.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PostController::update
 * @see app/Http/Controllers/PostController.php:67
 * @route '/posts/{post}'
 */
update.patch = (args: { post: string | { id: string } } | [post: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\PostController::update
 * @see app/Http/Controllers/PostController.php:67
 * @route '/posts/{post}'
 */
    const updateForm = (args: { post: string | { id: string } } | [post: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PATCH',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PostController::update
 * @see app/Http/Controllers/PostController.php:67
 * @route '/posts/{post}'
 */
        updateForm.patch = (args: { post: string | { id: string } } | [post: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
const PostController = { index, approve, destroy, edit, update }

export default PostController