-- api tiến độ doanh thu ngành logistics theo chi nhánh


curl --location --request GET 'localhost/index-manage/list-logistics-revenue?from_time=2022-10-01&to_time=2022-10-30&chi_nhanh_id=12&dich_vu_id=13' \
--header 'Authorization: Bearer 1234566adadadadadwwrwetetef'


Response:

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
        "dich_vu": "Forwarding",
        "tlht": "90%",
        "tien_do": "+10%",
        "tt_thang": "+15%",
        "tt_tbn_thang": "-1%",
        "tt_nam": "+25%"
      },
      {
        "chi_nhanh": "BHD",
        "dich_vu": "Forwarding",
        "tlht": "90%",
        "tien_do": "+10%",
        "tt_thang": "+15%",
        "tt_tbn_thang": "-1%",
        "tt_nam": "+25%"
      },
      {
        "chi_nhanh": "AGG",
        "dich_vu": "Forwarding",
        "tlht": "90%",
        "tien_do": "+10%",
        "tt_thang": "+15%",
        "tt_tbn_thang": "-1%",
        "tt_nam": "+25%"
      },
      {
        "chi_nhanh": "BHD",
        "dich_vu": "Forwarding",
        "tlht": "90%",
        "tien_do": "+10%",
        "tt_thang": "+15%",
        "tt_tbn_thang": "-1%",
        "tt_nam": "+25%"
      },
      {
        "chi_nhanh": "AGG",
        "dich_vu": "Forwarding",
        "tlht": "90%",
        "tien_do": "+10%",
        "tt_thang": "+15%",
        "tt_tbn_thang": "-1%",
        "tt_nam": "+25%"
      },
      {
        "chi_nhanh": "BHD",
        "dich_vu": "Forwarding",
        "tlht": "90%",
        "tien_do": "+10%",
        "tt_thang": "+15%",
        "tt_tbn_thang": "-1%",
        "tt_nam": "+25%"
      },
      {
        "chi_nhanh": "AGG",
        "dich_vu": "Forwarding",
        "tlht": "90%",
        "tien_do": "+10%",
        "tt_thang": "+15%",
        "tt_tbn_thang": "-1%",
        "tt_nam": "+25%"
      },
      {
        "chi_nhanh": "BHD",
        "dich_vu": "Forwarding",
        "tlht": "90%",
        "tien_do": "+10%",
        "tt_thang": "+15%",
        "tt_tbn_thang": "-1%",
        "tt_nam": "+25%"
      },
      {
        "chi_nhanh": "AGG",
        "dich_vu": "Forwarding",
        "tlht": "90%",
        "tien_do": "+10%",
        "tt_thang": "+15%",
        "tt_tbn_thang": "-1%",
        "tt_nam": "+25%"
      },
      {
        "chi_nhanh": "BHD",
        "dich_vu": "Forwarding",
        "tlht": "90%",
        "tien_do": "+10%",
        "tt_thang": "+15%",
        "tt_tbn_thang": "-1%",
        "tt_nam": "+25%"
      }
    ]
  }
}