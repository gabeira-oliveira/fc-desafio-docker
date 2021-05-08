############################
# STEP 1 build
############################
FROM golang:alpine AS builder
# Install git.
# Git is required for fetching the dependencies.
RUN apk update && apk add --no-cache git
WORKDIR $GOPATH/src/fullcycle
COPY . .
# Fetch dependencies.
# Using go get.
RUN go mod init github.com/gabeira-oliveira/fc-desafio-docker && \
    go get -d -v
# Build the binary.
RUN go build -o /src/go/bin

############################
# STEP 2 build a small image
############################
FROM scratch
# Copy our static executable.
COPY --from=builder /src/go/bin /src/go/bin
# Run the print.
ENTRYPOINT ["/src/go/bin"]