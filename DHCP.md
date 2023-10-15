DHCP
[FONT=verdana, sans-serif][FONT=verdana, sans-serif]
DHCP spoofing là kỹ thuật giả mạo DHCP Server trong mạng LAN. Kẻ tấn công có thể cài đặt một phần mềm DHCP Server trên máy tính của mình và cấp phát địa chỉ IP cho máy nạn nhân với các thông số giả mạo như default gateway, DNS. Từ đó, máy tính của nạn nhân sẽ bị chuyển hướng truy cập theo ý đồ của kẻ tấn công. [/FONT]
[FONT=verdana, sans-serif]Trong hình dưới, máy nạn nhân sau khi nhận thông tin về địa chỉ IP từ DHCP Server giả mạo, khi truy cập một website, ví dụ của ngân hàng, facebook, v.v có thể sẽ bị chuyển hướng truy cập tới máy chủ do kẻ tấn công kiểm soát. Trên máy chủ này kẻ tấn công có thể tạo những website giả mạo có giao diện giống y hệt website thật, nhằm đánh lừa nạn nhân nhập tài khoản, mật khẩu, từ đó đánh cắp những thông tin này.[/FONT]
​
[/FONT][FONT=verdana, sans-serif]
Kịch bản của việc tấn công thường diễn ra như sau:
B1. Máy tính của kẻ tấn công sẽ vét cạn toàn bộ Pool IP của máy DHCP Server bằng liên tục gửi các yêu cầu xin cấp phát IP (DHCP Discover) tới máy DHCP Server. Mỗi yêu cầu DHCP Discover này đều chứa địa chỉ MAC giả mạo nhằm đánh lừa DHCP Server rằng đó là lời yêu cầu từ các máy tính khác nhau. Vì Pool địa chỉ IP cấp phát trên DHCP Server là hữu hạn nên sau khi đã cấp phát hết IP, DHCP Server không thể phục vụ các yêu cầu xin IP từ máy Client.
B2. Kẻ tấn công cài đặt phần mềm DHCP Server trên máy của mình và cấp phát thông số IP giả mạo, điều hướng truy cập nạn nhân đến các máy chủ do hắn kiểm soát nhằm đánh lừa và đánh cắp thông tin.
