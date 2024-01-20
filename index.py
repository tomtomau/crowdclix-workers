def handleRequest(request):
    print("hello world")
    return __new__(Response('Python Worker hello world with update!', {
        'headers' : { 'content-type' : 'text/plain' }
    }))

addEventListener('fetch', (lambda event: event.respondWith(handleRequest(event.request))))
