"use client";
import React, { useState } from "react";
import Item from "../Item/Item";
import { Grid2, useMediaQuery, useTheme } from "@mui/material";
import Menu from "../Menu/Menu";
import styles from "./blogs.module.css";

const Blogs = () => {
  const blogs: blogType[] = [
    {
      date: "Sep 11, 2024",
      title: "Trải nghiệm lần đầu mình học ReactJS",
      content: `
      Trải Nghiệm Lần Đầu Học ReactJS

      Khi bước vào năm thứ ba của đại học, tôi đã được giới thiệu với ReactJS - một thư viện front-end nổi tiếng của Facebook. Lúc đó, tôi chưa có nền tảng vững về JavaScript và hoàn toàn mới mẻ với khái niệm ReactJS. Nhìn chung, tôi cảm thấy khá mơ hồ và khó khăn khi đối mặt với ReactJS, vì chưa bao giờ học qua bất kỳ khóa học nào về thư viện này.
      
      Bắt Đầu Mơ Hồ
      
      Ngay từ những buổi học đầu tiên, tôi đã gặp rất nhiều khó khăn. Mặc dù giảng viên đã cố gắng giải thích, nhưng do không có nền tảng JavaScript cơ bản, tôi cảm thấy rất khó hiểu và mơ hồ. Những khái niệm như “component”, “props”, và “state” hoàn toàn mới lạ với tôi. Tôi đã thử xem video hướng dẫn trên YouTube và cố gắng làm theo các ví dụ, nhưng tình trạng này không cải thiện nhiều. Mọi thứ vẫn cứ mờ mịt và tôi không thể hiểu được cách ReactJS hoạt động.
      
      Rớt Môn và Học Lại
      
      Sự khó khăn đã dẫn đến kết quả không mong muốn - tôi đã không qua môn học ReactJS. Tuy nhiên, tôi không từ bỏ. Tôi quyết định học lại môn học này và nhận ra rằng mình cần phải bắt đầu từ nền tảng cơ bản hơn. Tôi đã bắt đầu học JavaScript từ đầu, làm quen với các khái niệm cơ bản và dần dần hiểu cách JavaScript hoạt động. Với nền tảng vững chắc hơn, tôi quay lại với ReactJS lần thứ hai.
      
      Khám Phá và Hiểu Biết
      
      Lần này, việc học trở nên dễ dàng hơn nhiều. Tôi hiểu được cách thức hoạt động của ReactJS và các khái niệm như “component lifecycle”, “hooks”, và “context”. Những điều tôi từng thấy khó khăn trở nên rõ ràng hơn. Tôi cảm thấy mình đã nắm bắt được cách ReactJS giúp xây dựng giao diện người dùng hiệu quả và linh hoạt.
      
      Từ Khó Khăn Đến Thành Công
      
      Ngày nay, ReactJS đã trở thành một trong những thư viện front-end chính mà tôi sử dụng trong các dự án của mình. Việc hiểu biết và sử dụng ReactJS đã giúp tôi phát triển kỹ năng lập trình web và tạo ra những ứng dụng mạnh mẽ và thân thiện với người dùng. Kinh nghiệm học ReactJS đã dạy tôi rằng sự kiên nhẫn và nỗ lực là rất quan trọng khi học một công nghệ mới.
      
      Nhìn lại hành trình từ những ngày đầu khó khăn cho đến khi trở thành một phần không thể thiếu trong công việc hàng ngày, tôi cảm thấy rất hài lòng với những gì đã đạt được. Đó là một bài học quý giá về sự kiên trì và sự sẵn sàng học hỏi.
      `,
      imageUrl: "/images/blog1.jpg",
      topic: "ReactJS",
    },
    {
      date: "Sep 11, 2024",
      title: "Tại sao tôi yêu thích Fullstack Javascript",
      content: `Khi bắt đầu học lập trình, tôi đã thử sức với nhiều ngôn ngữ và framework khác nhau. Tuy nhiên, điều khiến tôi thực sự say mê chính là việc sử dụng JavaScript cho cả front-end và back-end. Dưới đây là những lý do vì sao tôi yêu thích Full Stack JavaScript:

      **1. Một Ngôn Ngữ Cho Tất Cả**
      
      Một trong những ưu điểm lớn nhất của Full Stack JavaScript là bạn chỉ cần học một ngôn ngữ - JavaScript - để làm việc trên cả hai mặt của ứng dụng: front-end và back-end. Điều này giúp tôi tiết kiệm thời gian, không cần phải chuyển đổi tư duy giữa các ngôn ngữ khác nhau, và làm việc hiệu quả hơn.
  
      **2. Cộng Đồng Mạnh Mẽ và Công Cụ Phong Phú**
      
      JavaScript có một cộng đồng khổng lồ với hàng triệu nhà phát triển trên khắp thế giới. Từ đó, tôi có thể dễ dàng tìm thấy các tài liệu học tập, thư viện hữu ích, và giải pháp cho những vấn đề mình gặp phải. Các framework như ReactJS, Node.js, và Express.js đã trở thành công cụ không thể thiếu giúp tôi xây dựng các ứng dụng web mạnh mẽ, linh hoạt.
  
      **3. Hiệu Quả Cao Khi Xây Dựng Ứng Dụng**
      
      Với Full Stack JavaScript, tôi có thể xây dựng ứng dụng từ đầu đến cuối mà không cần phụ thuộc vào quá nhiều công nghệ khác nhau. Sự liên kết giữa front-end (ReactJS, Vue.js) và back-end (Node.js, Express.js) rất liền mạch. Điều này giúp tôi dễ dàng quản lý và phát triển ứng dụng một cách nhất quán, từ giao diện người dùng cho đến server.
  
      **4. Tiềm Năng Phát Triển Không Giới Hạn**
      
      Full Stack JavaScript không chỉ giới hạn ở việc phát triển web. Với sự xuất hiện của các công nghệ như Electron và React Native, tôi có thể xây dựng các ứng dụng desktop và mobile bằng JavaScript. Điều này mở ra rất nhiều cơ hội cho tôi trong việc phát triển những sản phẩm đa nền tảng.
  
      **5. Môi Trường Thân Thiện và Linh Hoạt**
      
      Việc cài đặt môi trường phát triển với JavaScript rất đơn giản và linh hoạt. Node.js cung cấp cho tôi một môi trường chạy server nhanh chóng, và với sự hỗ trợ của NPM (Node Package Manager), tôi có thể dễ dàng quản lý các thư viện và gói mở rộng. Điều này giúp tối ưu hóa quy trình làm việc và tăng tốc độ phát triển dự án.
  
      **Kết Luận**
  
      Đối với tôi, Full Stack JavaScript là sự lựa chọn hoàn hảo khi muốn trở thành một nhà phát triển toàn diện. Việc sử dụng cùng một ngôn ngữ cho cả front-end và back-end không chỉ giúp tôi làm việc hiệu quả hơn mà còn mang lại cho tôi sự linh hoạt và sự sáng tạo không giới hạn trong các dự án. Đây là lý do tại sao tôi yêu thích Full Stack JavaScript và tôi tin rằng ngôn ngữ này sẽ tiếp tục phát triển mạnh mẽ trong tương lai.`,
      imageUrl: "/images/blog2.jpg",
      topic: "Javascript",
    },
  ];
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [topic, setTopic] = useState("All");
  return (
    <div className={styles.wrapper}>
      <Grid2 container direction={isMobile ? "column-reverse" : "row"}>
        <Grid2
          className={styles.blogsWrapper}
          size={{ xs: 12, md: 9 }}
          sx={{
            padding: {
              md: "0 50px",
              lg: "0 100px",
            },
          }}
        >
          {blogs
            .filter((item) => {
              if (topic === "All") {
                return true;
              } else {
                return item.topic === topic;
              }
            })
            .map((item) => (
              <Item key={item.title} item={item} />
            ))}
        </Grid2>
        <Grid2
          size={{ xs: 12, md: 3 }}
          sx={{
            marginBottom: isMobile ? "20px" : "0px",
          }}
        >
          <Menu topicState={topic} setTopic={setTopic} />
        </Grid2>
      </Grid2>
    </div>
  );
};

export default Blogs;
