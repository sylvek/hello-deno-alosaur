# hello world!

```
$ brew install deno
$ deno install -qAn vr https://deno.land/x/velociraptor@1.4.0/cli.ts
$ export PATH="/Users/sylvek/.deno/bin:$PATH"

▶ vr start:dev  
Watcher Process started.
The "HealthzController" controller has been registered.
The "/" route has been registered.
Server start in { hostname: "0.0.0.0", port: 8000 }

▶ http http://localhost:8000
HTTP/1.1 200 OK
content-length: 11
date: Mon, 23 May 2022 13:21:33 GMT
vary: Accept-Encoding

hello world
```

