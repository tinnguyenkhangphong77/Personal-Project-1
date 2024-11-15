import React, { useState } from "react";
import SearchForm from "./search/searchForm";
import { DateRangePicker } from "react-date-range";
import "../static/header.scss";

const Header = () => {
  // State để lưu trữ ngày bắt đầu và kết thúc được chọn
  const [date, setDate] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  // State để kiểm soát việc hiển thị DatePicker
  const [openDate, setOpenDate] = useState(false);

  // Xử lý sự kiện khi người dùng nhấp vào nút chọn ngày
  const handleDateClick = () => {
    setOpenDate(!openDate); // Đảo ngược trạng thái hiển thị của DatePicker
  };

  // Xử lý sự kiện khi người dùng thay đổi ngày trong DatePicker
  const handleDatePickerChange = (ranges) => {
    setDate(ranges.selection); // Cập nhật ngày bắt đầu và kết thúc được chọn
  };

  return (
    <header className="header">
      <h1>A lifetime of discount? It's Genius</h1>

      <p className="description">
        Get rewarded your travel - unlock instant savings of 10% or more with a
        free account
      </p>

      <p className="header-btn">Sign in / Register</p>

      <SearchForm date={date} handleDateClick={handleDateClick} />

      {openDate && (
        <DateRangePicker
          className="datePicker"
          ranges={[date]}
          onChange={handleDatePickerChange}
        />
      )}
    </header>
  );
};

export default Header;
