FROM denoland/deno:alpine
EXPOSE 8000
USER deno
COPY src /src
WORKDIR /src
RUN deno cache main.ts
CMD ["run", "--allow-all", "main.ts"]