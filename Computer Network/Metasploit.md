Metasploit Framework

sử dụng giao diện msfconsole:
- Back: Lệnh này dùng khi bạn muốn thoát ra khỏi module bạn đã chọn trước đó sau khi hoàn thành công việc hoặc muốn chuyển sang công việc khác.
Ví dụ: msf payload(reverse http) > back
msf>
- Check: Lệnh này giúp ta kiểm tra đã cấu hình đúng cho khai thác chưa, mọi việc đã hoàn thành chưa. Cho ta biết kết quả mà không cần phải thực thi khai thác đó. Nhưng không phải tất cả mọi mã khai thác đều hỗ trợ lệnh này.
- Connect: Lệnh này giống như một bản netcat thu nhỏ đc cho vào metasploit được hỗ trợ với ssl, proxy, pivoting... Với việc dùng câu lệnh connect với địa chỉ ip và port tương ứng, chúng ta có thể connect tới một host từ metasploit giống như khi dùng với netcat hoặc telnet vậy.
Ví dụ: msf > connect 118.69.228.254 22
- Info: Lệnh này cho biết những thông tin chi tiết của một module (hay một mã khai thác nào đó ). Hiển thị cho ta thông tin cơ bản nhất, bao gồm cả các tùy chọn cần thiết.
- Irb: Lệnh này cho ta thao tác trên môi trường của ruby. Ví dụ: msf > irb –h
- Jobs: Lệnh này cho ta biết các module đang chạy.
- Load: Lệnh này để load một plugin từ metasploit plugins.
- Search: Lệnh này giúp ta tìm kiếm exploit, auxiliary, encoder. Trong đó nó còn hỗ trợ một số keywork giúp cải tiến khả năng tìm kiếm như: name, path, platform, port, type, app, author, cve, bid, osvdb, edb. Ví dụ: search cve:2009 type:exploit app:client.
- Sessions: lệnh này liệt kê các session đang tồn tại, session ở đây có thể là session của shell, của meterpreter ....
- Set - Unset: Lệnh cho phép ta cấu hình cho các exploit... lệnh này gặp thường xuyên. Unset là lệnh có ý nghĩa ngược lại.
- Setg - Unsetg: Trong quá trình thực hiện tấn công một mục tiêu, hoặc nhiều mục tiêu. Ta có thể dùng một exploit hoặc đôi khi là nhiều exploit. Có một vào option nếu set bình thường thì ta phải set nhiều lần. Nhưng nếu ta để cho các option này có ý nghĩa toàn cục. Thì việc lặp lại là không cần. Nó có hiệu lực cho mọi exploit, auxiliary. Đó là ý nghĩa của setg (global set). Để hủy thì ta dùng unsetg. Nếu muốn lưu việc cấu hình này lại dùng lệnh "save".
- Show: Liệt kê các module hiện tại.
- Use: Cho phép chọn một một module.
- Auxiliary: Là một module cung cấp chưc năng tăng cường cho các thử nghiệm xâm nhập và quét lỗ hổng cùng với các tác vụ tự động. Phân loại trong auxiliary module: module quét các giao thức (như SMB, HTTP), module quét các port, wireless, IPV6, DOS, Server modules, Module khai thác truy cập quản trị.
- Exploits: Là một module dùng để khai thác các dịch vụ.

![305665057_831535984542317_140930411404261764_n](https://github.com/NguyenNhutY/Computer_Networks/assets/130396826/f70d00dc-94cb-48d0-9228-c5820b1672e1)
![307022942_831535884542327_3497834573274201593_n](https://github.com/NguyenNhutY/Computer_Networks/assets/130396826/684d4d8a-3715-449e-8901-f9d4b087be88)
![307378749_831535277875721_3504911254539828589_n](https://github.com/NguyenNhutY/Computer_Networks/assets/130396826/4e3cec4e-8e92-45d7-8d39-1b6331c24492)
![306626633_831534711209111_8900953590861741836_n](https://github.com/NguyenNhutY/Computer_Networks/assets/130396826/6c0f2be1-ff6b-4e79-831d-5a21f5be1e34)
![307368868_831534387875810_4267889327603797756_n](https://github.com/NguyenNhutY/Computer_Networks/assets/130396826/6587c727-8623-4292-b3c4-9825934580dc)
![306975625_831534177875831_1181757606774464599_n](https://github.com/NguyenNhutY/Computer_Networks/assets/130396826/c27b42fa-297a-4c70-9a4d-ce39e3dc117d)
![306788849_831534037875845_2264104271119857945_n](https://github.com/NguyenNhutY/Computer_Networks/assets/130396826/59727d95-1d6e-424d-86b1-9c6dfca04b17)
![308679524_831533884542527_4771229869976551997_n](https://github.com/NguyenNhutY/Computer_Networks/assets/130396826/056ad89f-8849-4370-a727-aabe779d7118)
![307872467_831533704542545_7542365147633236167_n](https://github.com/NguyenNhutY/Computer_Networks/assets/130396826/f40aa010-0b39-48ce-8fbd-ebb1b210f4d0)
![306169518_831533561209226_3859811573612691051_n](https://github.com/NguyenNhutY/Computer_Networks/assets/130396826/41b01f47-affc-4d8f-97be-0bc39c96907a)
![306359449_831532864542629_561318516582448428_n](https://github.com/NguyenNhutY/Computer_Networks/assets/130396826/93d24bfa-bbe2-4093-aaf7-f3b0e147b0d2)
![308116558_831536577875591_9113790937455689919_n](https://github.com/NguyenNhutY/Computer_Networks/assets/130396826/7c21adc3-6b90-4c86-881c-fe389a1a883f)
