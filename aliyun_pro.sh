npm run build
# rsync -avz -e "ssh" dist/* root@59.110.154.174:/var/www/html  # czw.huanlublog.com

rsync -avz -e "ssh" dist/* root@1.117.218.45:/home/huanlu # www.huanlublog.com
# rsync -avz -e "ssh" dist/* root@59.110.154.174:/home/admin/paris  # paris.huanlublog.com

# server{
# 	listen 80;
# 	server_name czw.huanlublog.com;
# 	root /home/huanlu;  
# 	index index.html;
# 	error_log /home/huanlu/error.log warn;
# }

server{
        server_name www.huanlublog.com;
        listen  80;
        client_max_body_size 20m;

	access_log	/var/log/nginx/delivery.access.log;
	error_log	/var/log/nginx/delivery.error.log;

        location / {
                root   /home/huanlu;
                add_header 'Access-Control-Allow-Origin' '*';
                index  index.html index.htm;
        }
}