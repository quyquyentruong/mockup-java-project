-- Tiến độ doanh thu

curl --location --request GET 'localhost/index-manage/list-revenue?from_time=2022-10-01&to_time=2022-10-30&chi_nhanh_id=12&doanh_thu_id=13' \
--header 'Authorization: Bearer 1234566adadadadadwwrwetetef'


Response

{
  "message": "",
  "error": 0,
  "data": {
    "pagination": {
      "page": 1
    },
    "data_detail": [
      {
        "chi_nhanh": "AGG",
        "tong_doanh_thu": 1000000,
        "ti_le_hoan_thanh": "80%",
        "tang_truong_thang": "20%",
        "tang_truong_nam": "30%",
        "tang_truong_tb_thang": "40%",
        "tang_truong_tb_nam": "50%"
      },
      {
        "chi_nhanh": "BGH",
        "tong_doanh_thu": 5000000,
        "ti_le_hoan_thanh": "30%",
        "tang_truong_thang": "40%",
        "tang_truong_nam": "50%",
        "tang_truong_tb_thang": "40%",
        "tang_truong_tb_nam": "50%"
      },
      {
        "chi_nhanh": "HNC",
        "tong_doanh_thu": 8000000,
        "ti_le_hoan_thanh": "35%",
        "tang_truong_thang": "27%",
        "tang_truong_nam": "19%",
        "tang_truong_tb_thang": "23%",
        "tang_truong_tb_nam": "50%"
      },
      {
        "chi_nhanh": "AGG",
        "tong_doanh_thu": 1000000,
        "ti_le_hoan_thanh": "80%",
        "tang_truong_thang": "20%",
        "tang_truong_nam": "30%",
        "tang_truong_tb_thang": "40%",
        "tang_truong_tb_nam": "50%"
      },
      {
        "chi_nhanh": "BGH",
        "tong_doanh_thu": 5000000,
        "ti_le_hoan_thanh": "30%",
        "tang_truong_thang": "40%",
        "tang_truong_nam": "50%",
        "tang_truong_tb_thang": "40%",
        "tang_truong_tb_nam": "50%"
      },
      {
        "chi_nhanh": "HNC",
        "tong_doanh_thu": 8000000,
        "ti_le_hoan_thanh": "35%",
        "tang_truong_thang": "27%",
        "tang_truong_nam": "19%",
        "tang_truong_tb_thang": "23%",
        "tang_truong_tb_nam": "50%"
      },
      {
        "chi_nhanh": "AGG",
        "tong_doanh_thu": 1000000,
        "ti_le_hoan_thanh": "80%",
        "tang_truong_thang": "20%",
        "tang_truong_nam": "30%",
        "tang_truong_tb_thang": "40%",
        "tang_truong_tb_nam": "50%"
      },
      {
        "chi_nhanh": "BGH",
        "tong_doanh_thu": 5000000,
        "ti_le_hoan_thanh": "30%",
        "tang_truong_thang": "40%",
        "tang_truong_nam": "50%",
        "tang_truong_tb_thang": "40%",
        "tang_truong_tb_nam": "50%"
      },
      {
        "chi_nhanh": "HNC",
        "tong_doanh_thu": 8000000,
        "ti_le_hoan_thanh": "35%",
        "tang_truong_thang": "27%",
        "tang_truong_nam": "19%",
        "tang_truong_tb_thang": "23%",
        "tang_truong_tb_nam": "50%"
      },
      {
        "chi_nhanh": "HNC",
        "tong_doanh_thu": 8000000,
        "ti_le_hoan_thanh": "35%",
        "tang_truong_thang": "27%",
        "tang_truong_nam": "19%",
        "tang_truong_tb_thang": "23%",
        "tang_truong_tb_nam": "50%"
      }
    ]
  }
}