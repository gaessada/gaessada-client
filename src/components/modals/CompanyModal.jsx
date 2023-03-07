import React from "react";
import DefaultUser from "../../assets/default_user.png";

const CompanyModal = () => {
  return (
    <div className="w-full px-8 py-8">
      <div className="flex h-28 w-full items-center font-nanum">
        <img src={DefaultUser} alt="" className="w-28 h-28 rounded-lg" />
        <div className="ml-6">
          <p className="text-3xl">(주)픽톨로지</p>
          <p className="mt-3 text-xs">게임·애니메이션</p>
        </div>
      </div>
      <div className="w-full p-8 py-4 mt-4 bg-gray-100 rounded-lg border font-nanum flex space-x-14">
        <p className="text-sm text-gray-500">관리자</p>
        <p className="text-sm">곽상희 이사</p>
      </div>
      <div className="w-full p-8 mt-4 bg-gray-100 rounded-lg border font-nanum flex space-x-12">
        <div className="space-y-4 text-sm text-gray-500 flex-shrink-0">
          <p>홈페이지</p>
          <p>산업</p>
          <p>기업구분</p>
          <p>대표자</p>
          <p>사원수</p>
          <p>설립일</p>
          <p>주소</p>
        </div>
        <div className="space-y-4 text-sm">
          <p>-</p>
          <p>게임·애니메이션</p>
          <p>중소기업</p>
          <p>김세훈</p>
          <p>-</p>
          <p>-</p>
          <p>서울 강남구 삼성로103길 12 (삼성동, 신도브래뉴주상복합) 301호</p>
        </div>
      </div>
    </div>
  );
};

export default CompanyModal;
