docker rm amkiosk --force
docker build --tag amkiosk:latest .
docker run -p 8080:8080 -e VIRTUAL_HOST="amkiosk.comcastmediatechcenter.org" -e LETSENCRYPT_HOST="amkiosk.comcastmediatechcenter" --network=webproxy -d --name amkiosk amkiosk:latest
