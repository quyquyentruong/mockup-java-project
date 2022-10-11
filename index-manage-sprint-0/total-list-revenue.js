-- Trả về tổng số trung bình

curl --location --request GET 'localhost/index-manage/total-list-revenue?from_time=2022-10-01&to_time=2022-10-30&chi_nhanh_id=12&doanh_thu_id=13' \
--header 'Authorization: Bearer 1234566adadadadadwwrwetetef'



Response

{
  "message": "",
  "error": 0,
  "data": {
    "tong_doanh_thu": 10000000,
    "ty_le_hoan_thanh": "95,5%",
    "tang_truong_thang": "5,5%",
    "tang_truong_nam": "10,0%",
    "tang_truong_tb_thang": "20,01%",
    "tang_truong_tb_nam": "9,9%"
  }
}