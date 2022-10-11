-- Tiến độ doanh thu theo chi nhánh

curl --location --request GET 'localhost/index-manage/list-process-branch?from_time=2022-10-01&to_time=2022-10-30&chi_nhanh_id=12&doanh_thu_id=13' \
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
        "nhom_doanh_thu": "DT Chuyển phát",
        "ke_hoach": 1000000,
        "thuc_hien": 500000,
        "tlht": "90%",
        "tien_do": "-1%",
        "tt_thang": "+2%",
        "tt_tbn_thang": "+5%",
        "tt_nam": "+5%",
        "tt_tbn_nam": "+5%"
      },
      {
        "chi_nhanh": "BGH",
        "nhom_doanh_thu": "DT Logistics",
        "ke_hoach": 2000000,
        "thuc_hien": 100000,
        "tlht": "90%",
        "tien_do": "-1%",
        "tt_thang": "+2%",
        "tt_tbn_thang": "+5%",
        "tt_nam": "+5%",
        "tt_tbn_nam": "+5%"
      },
      {
        "chi_nhanh": "AGG",
        "nhom_doanh_thu": "DT Chuyển phát",
        "ke_hoach": 1000000,
        "thuc_hien": 500000,
        "tlht": "90%",
        "tien_do": "-1%",
        "tt_thang": "+2%",
        "tt_tbn_thang": "+5%",
        "tt_nam": "+5%",
        "tt_tbn_nam": "+5%"
      },
      {
        "chi_nhanh": "BGH",
        "nhom_doanh_thu": "DT Logistics",
        "ke_hoach": 2000000,
        "thuc_hien": 100000,
        "tlht": "90%",
        "tien_do": "-1%",
        "tt_thang": "+2%",
        "tt_tbn_thang": "+5%",
        "tt_nam": "+5%",
        "tt_tbn_nam": "+5%"
      },
      {
        "chi_nhanh": "AGG",
        "nhom_doanh_thu": "DT Chuyển phát",
        "ke_hoach": 1000000,
        "thuc_hien": 500000,
        "tlht": "90%",
        "tien_do": "-1%",
        "tt_thang": "+2%",
        "tt_tbn_thang": "+5%",
        "tt_nam": "+5%",
        "tt_tbn_nam": "+5%"
      },
      {
        "chi_nhanh": "BGH",
        "nhom_doanh_thu": "DT Logistics",
        "ke_hoach": 2000000,
        "thuc_hien": 100000,
        "tlht": "90%",
        "tien_do": "-1%",
        "tt_thang": "+2%",
        "tt_tbn_thang": "+5%",
        "tt_nam": "+5%",
        "tt_tbn_nam": "+5%"
      },
      {
        "chi_nhanh": "AGG",
        "nhom_doanh_thu": "DT Chuyển phát",
        "ke_hoach": 1000000,
        "thuc_hien": 500000,
        "tlht": "90%",
        "tien_do": "-1%",
        "tt_thang": "+2%",
        "tt_tbn_thang": "+5%",
        "tt_nam": "+5%",
        "tt_tbn_nam": "+5%"
      },
      {
        "chi_nhanh": "BGH",
        "nhom_doanh_thu": "DT Logistics",
        "ke_hoach": 2000000,
        "thuc_hien": 100000,
        "tlht": "90%",
        "tien_do": "-1%",
        "tt_thang": "+2%",
        "tt_tbn_thang": "+5%",
        "tt_nam": "+5%",
        "tt_tbn_nam": "+5%"
      },
      {
        "chi_nhanh": "AGG",
        "nhom_doanh_thu": "DT Chuyển phát",
        "ke_hoach": 1000000,
        "thuc_hien": 500000,
        "tlht": "90%",
        "tien_do": "-1%",
        "tt_thang": "+2%",
        "tt_tbn_thang": "+5%",
        "tt_nam": "+5%",
        "tt_tbn_nam": "+5%"
      },
      {
        "chi_nhanh": "BGH",
        "nhom_doanh_thu": "DT Logistics",
        "ke_hoach": 2000000,
        "thuc_hien": 100000,
        "tlht": "90%",
        "tien_do": "-1%",
        "tt_thang": "+2%",
        "tt_tbn_thang": "+5%",
        "tt_nam": "+5%",
        "tt_tbn_nam": "+5%"
      }
    ]
  }
}