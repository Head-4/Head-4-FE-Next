# univon (Next.js 리팩터링 진행중)

> 대학교 공지사항 알림 서비스

<div align="center">
  <img src="https://github.com/user-attachments/assets/059a3a56-5dd9-488d-a6a3-eeda9dda0f90" width="300" alt="univon logo"/>
</div>

대학교 홈페이지에 올라오는 수많은 공지사항들,  
중요한 내용이지만 매번 직접 확인하기는 번거롭습니다.

**univon**은 학교의 공지사항을 자동으로 수집하고,  
사용자가 관심 있는 키워드 기반으로 알림을 받을 수 있도록 도와주는 서비스입니다.

---

## ✨ 주요 기능

<details>
<summary>⭐️ FCM 알림</summary>

<br/>

- Firebase Cloud Messaging(FCM)을 이용한 푸시 알림 기능 구현
- Service Worker를 설정하여 웹과 앱 환경에서도 실시간 알림 수신 가능

#### 📸 관련 이미지

<table>
  <tr>
    <td align="center">
      <img src="이미지_주소_1" width="250" alt="알림 예시 1" /><br/>
      <sub>푸시 알림 1</sub>
    </td>
    <td align="center">
      <img src="이미지_주소_2" width="250" alt="알림 예시 2" /><br/>
      <sub>푸시 알림 2</sub>
    </td>
  </tr>
</table>

</details>



<details>
<summary>⭐️ 소셜 로그인</summary>

<br/>

- 카카오 계정을 활용한 소셜 로그인 기능 제공

#### 📸 관련 이미지

<table>
  <tr>
    <td align="center">
      <img src="이미지_주소_3" width="250" alt="로그인 예시 1" /><br/>
      <sub>카카오 로그인 화면</sub>
    </td>
    <td align="center">
      <img src="이미지_주소_4" width="250" alt="로그인 예시 2" /><br/>
      <sub>로그인 후 홈</sub>
    </td>
  </tr>
</table>

</details>



<details>
<summary>⭐️ 학교 설정 / 키워드 설정 / 알림 설정</summary>

<br/>

- 사용자가 관심 있는 학교와 키워드를 직접 설정할 수 있음
- 특정 키워드와 일치하는 공지사항에 대해서만 알림 제공

#### 📸 관련 이미지

<table>
  <tr>
    <td align="center">
      <img src="이미지_주소_5" width="250" alt="학교 설정" /><br/>
      <sub>학교 선택</sub>
    </td>
    <td align="center">
      <img src="이미지_주소_6" width="250" alt="키워드 설정" /><br/>
      <sub>키워드 등록</sub>
    </td>
    <td align="center">
      <img src="이미지_주소_7" width="250" alt="알림 설정" /><br/>
      <sub>알림 켜기/끄기</sub>
    </td>
  </tr>
</table>

</details>



<details>
<summary>⭐️ PWA</summary>

<br/>

- Progressive Web App(PWA)로 모바일 환경에 최적화
- 별도 설치 없이도 홈 화면에 앱처럼 추가 가능

#### 📸 관련 이미지

<table>
  <tr>
    <td align="center">
      <img src="이미지_주소_8" width="250" alt="PWA 설치" /><br/>
      <sub>PWA 설치 안내</sub>
    </td>
    <td align="center">
      <img src="이미지_주소_9" width="250" alt="PWA 실행" /><br/>
      <sub>PWA 실행 화면</sub>
    </td>
  </tr>
</table>

</details>



## 🛠 기술 스택

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Next.js](https://img.shields.io/badge/Next.js-000?logo=nextdotjs&logoColor=fff&style=for-the-badge)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TanStack Query](https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=react-query&logoColor=white)



## 🚀 배포 주소

🔗 현재 배포 주소 : [https://www.univ-on.com/](https://www.univ-on.com/)

🔗 리팩토링 이전 깃허브 주소 : [https://github.com/Head-4/Head-4-FE-VITE](https://github.com/Head-4/Head-4-FE-VITE)


## 👥 팀 소개

| 👨‍💻 성지훈 (Front-end) | 🧑‍💻 박준형 (Back-end) | 🧑‍💻 엄지호 (Back-end) |
|------------------|------------------|------------------|


