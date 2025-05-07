// ==============================
// HÀM TỔ HỢP nCk
// ==============================
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) result *= i;
    return result;
  }
  
  function nCk(n, k) {
    if (k > n || k < 0) return 0;
    return factorial(n) / (factorial(k) * factorial(n - k));
  }
  
  // ==============================
  // DANH SÁCH THÀNH VIÊN
  // ==============================
  const coreMember = "CORE";
  const coreTeam = ["C1", "C2", "C3", "C4", "C5"];
  const reserveTeam = ["R1", "R2", "R3", "R4", "R5"];
  
  // ==============================
  // TRƯỜNG HỢP 1: Không ràng buộc
  // ==============================
  function case1_noConstraints() {
    return nCk(coreTeam.length, 1) * nCk(reserveTeam.length, 1); // 5 * 5 = 25
  }
  
  // ==============================
  // TRƯỜNG HỢP 2: Cặp bài trùng cố định
  // ==============================
  function case2_pairingFixed() {
    return coreTeam.length; // 5 fixed pairs
  }
  
  // ==============================
  // TRƯỜNG HỢP 3: Cặp bài trùng linh hoạt
  // ==============================
  function case3_pairingMulti() {
    return nCk(coreTeam.length, 1) * nCk(reserveTeam.length, 1); // 5 * 5 = 25
  } 
  
  // ==============================
  // TRƯỜNG HỢP 4: Cặp không thể chơi cùng - cố định , mỗi thành viên chỉ được ở 1 cặp faild
  // ==============================
  function case4_failedFixed() {
    const failedPairs = coreTeam.map((c, i) => [c, reserveTeam[i]]); // e.g., [[C1, R1], [C2, R2], ..., [C5, R5]]
    const totalTeams = case1_noConstraints()
    const failedTeams = failedPairs.length;
    return totalTeams - failedTeams;
  }
  
  console.log("\n==> KẾT QUẢ TỔ HỢP CÁC TRƯỜNG HỢP:");
  console.log("\nCase 1 ( bốc bình thường không ràng buộc):", case1_noConstraints()," cách chọn"); 
  console.log("\nCase 2 (Cặp bài trùng cố định  - mỗi thành viên chỉ ở duy nhất 1 cặp bài trùng):", case2_pairingFixed()," cách chọn"); 
  console.log("\nCase 3 (Cặp bài trùng linh hoạt -  mỗi thành viên có thể ở nhiều hơn 1 cặp bài trùng ):", case3_pairingMulti()," cách chọn"); 
  console.log("\nCase 4 (Cặp không hợp lệ cố định - mỗi thành viên chỉ có thể ở 1 cặp faild ):", case4_failedFixed()," cách chọn\n"); 
 