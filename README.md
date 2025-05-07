## Student Management

- không Viết phuong Thức vào Class Student  - > Viết các hàm riêng biệt để xử lý list Json làm đàu vào 


[Click vào đây để xem mã nguồn của Student_Management](src/studentManagement)

<br>
<br>
<br>


## TeamsFormation


Bài tập: Tổ chức đội thi đấu

Một đội vận động viên có 40 người:
- 1 người là thành viên chủ lực 
- 5 người là đội nòng cốt 
- 5 người là đội dự bị 
- 29 người còn lại là thành viên thường

Yêu cầu:
1. Tìm tất cả các cách chọn 3 người thỏa mãn:
   - Bắt buộc phải có thành viên chủ lực
   - Phải có ít nhất 1 người từ đội nòng cốt
   - Người còn lại phải là người từ đội dự bị

2. Các ràng buộc bổ sung:
   - Trong đội có những cặp bài trùng HLV muốn những người này phải chơi cùng nhau, nhưng có những cặp thì không thể chơi cùng nhau nên ko thể ghép vào 1 đội.
   - thêm những ràng buộc này trong quá trình chọn đội. 
   - HLV có thể thay đổi những điều kiện này trước khi sắp xếp đội hình

=> Nếu bốc không ràng buộc thì ta có 25 (1 * 5C1 * 5C1) cách chọn . 


trường hợp bốc có cặp bài trùng : 

* không set đến trừng hợp cặp không thể thi đấu ở đây vì nếu bốc được cặp bài trùng rồi thì ko còn slot để các cặp faild được chọn

- Trường hợp mỗi thành viên chỉ có thể ở trong 1 cặp bài trung thì ta có tổng công 5 cặp bài trùng  (5c1 -> 5 cách bốc) 
=> Với 5 cặp bài trùng đã được xác định ta bốc teams 3 thì có thể bốc nhiều nhất là 5(1* 5C1) teams

- Trường hợp mỗi thành viên có thể ghép với nhiều thành viên khác thành cặp bài trùng thì ta có nhiều nhất 25 (5C1 * 5C1) cách bốc cặp bài trùng 
=> với 25 cách bốc cặp bài trùng thì ta có 25 cách bốc Teams 3

Trường hợp nếu tồn tại cặp faild:

- Trường hợp các thành viên chỉ có thể tồn tại ở 1 cặp faild thì có tổng cộng 5 cặp faild
=> ta sẽ có 25 - 5 =  20 cách bốc

- trường hợp mỗi thành viên có thể gép đôi với nhiều người để tạo ra nhiều cặp faild thì ta có 25 cách bốc cặp faild
=> ta sẽ không thể bốc được cặp bào nếu tồn tại khả năng 25 cách bốc cặp faild


[Click vào đây để xem mã nguồn của TeamsFormation](src/teamsFormation/index.js)