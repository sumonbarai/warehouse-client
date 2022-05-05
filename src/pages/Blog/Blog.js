import React from "react";

const Blog = () => {
  return (
    <div className="blog-area section-padding">
      <div className="container">
        <div className="question">
          <p>প্রশ্ন ১:javascript ও nodejs এর মধ্যে পার্থক্য কি ?</p>
          <p>
            উত্তর :১.javascript হলো একটা প্রোগ্রামিং ল্যাঙ্গুয়েজে ,যেটি ব্যবহার
            করা হয় ওয়েবসাইট এ স্ক্রিপ্ট লিখতে ব্যবহার করা হয়। nodejs হলো
            জাভাস্ক্রিপ্ট এর runtime environment . ২. জাভাস্ক্রিপ্ট সাধারণত
            browser এ রান হয়। জাভাস্ক্রিপ্ট কে browser এর বাহিরে রান করানোর জন্য
            nodejs ব্যাবহার করা হয়। ৩. জাভাস্ক্রিপ্ট frontend development এ
            ব্যাবহার করা হয়। Nodejs server - side development এ ব্যাবহার করা হয়।
            ৪. জাভাস্ক্রিপ্ট এর ফ্রেমেওয়ার্কস হলো ramdajs typedjs . nodejs এর
            ফ্রেমওয়ার্ক হলো expressjs lodash{" "}
          </p>
        </div>
        <div className="question">
          <p>প্রশ্ন ২: sql এবং nosql ডাটাবেস এর মধ্যে পার্থক্য কি ?</p>
          <p>
            উত্তর :১. sql হলো relational database management system .RDBMS
            .nosql হলো non relational or distributed system. ২. SQL database হলো
            fixed or static ওর predefined schema . NoSql হলো dynamic schema ৩.
            SQL database complex queries এর জন্য ভালো। No SQL database complex
            queries এর জন্য বেশি ভালো নয়।
          </p>
        </div>
        <div className="question">
          <p>প্রশ্ন ৩: jwt ব্যবহার এর উদ্দেশ্য কি ? এটা কি ভাবে কাজ করে ?</p>
          <p>
            উত্তর : jwt এর পূর্ন্যরূপ হলো json web token . এটা বাবহার এর
            উদ্দেশ্য হলো ক্লায়েন্ট সাইড থেকে ডাটা সার্ভার সাইড এ ডাটা সতর্কতা
            সহিত পাঠানো হয়। যেন ডাটা কেউ হ্যাক করতে না পারে। এটি ইউসার কে একটা
            টোকেন দিয়ে থাকে যাতে করে সার্ভার বুজতে পারে যে ব্যাক্তি ডাটা এর জন্য
            রিকোয়েস্ট করেছে সে রিয়েল পারসন।
          </p>
        </div>
        <div className="question">
          <p>
            প্রশ্ন ৪: কখন nodejs ব্যবহার করা উচিত ?কখন mongodb ব্যবহার করা উচিত
            ?
          </p>
          <p>
            উত্তর : nodejs হলো জাভাস্ক্রিপ্ট এর একটা runtime environment .
            nodejs সাধারণত ব্যাবহার করে হয় traditional website site এ এবং
            ব্যাকএন্ড api সার্ভিস এ। mongobd হলো nosql ডাটাবেস system . ডাটা
            গুলা যদি well structure না হয় এবং এটা জন্য কোনো query langulage এর
            দরকার হয় না। এই কারণে mongodb ব্যবহার করে উচিত।
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
