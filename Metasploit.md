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
