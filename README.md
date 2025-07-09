# univon 

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
<summary>⭐️ 학교 설정 / 키워드 설정 / 알림 설정</summary>

#### 📋 기능 설명
- 사용자가 직접 **학교를 선택**하고 해당 학교의 공지사항만 확인 가능합니다.
- 관심 있는 공지를 **키워드 기반**으로 필터링할 수 있으며, 키워드는 자유롭게 추가/삭제 가능합니다.
- 알림 여부를 ON/OFF로 제어할 수 있어, 알림 수신 여부를 설정 가능합니다.

#### 💻 구현 방식
- 학교 및 키워드는 유저 설정 API를 통해 서버에 저장됩니다.
- `React Query`로 상태 및 캐싱 관리, `debounce`를 활용한 요청 최적화 처리.
- 키워드는 서버에서 `공지사항 본문에 포함 여부`로 필터링 후 알림 대상 결정.
- 알림 설정은 `FCM 토큰 + 키워드 + 학교 설정` 정보를 기준으로 푸시 필터링.

#### 📸 관련 이미지

<table>
  <tr>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/b3160c33-ba97-474f-b342-2480d8dcc0a8" width="250" alt="메인 페이지" /><br/>
      <sub>메인 공지사항 페이지</sub>
    </td>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/7fa48e0d-9df5-4e1c-903a-f7b7d599de98" width="250" alt="학교 설정" /><br/>
      <sub>학교 설정 페이지</sub>
    </td>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/73ce89f2-9329-49e3-a8e9-db41a982918d" width="250" alt="키워드 설정" /><br/>
      <sub>키워드 설정 페이지</sub>
    </td>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/b4ecae3e-e28b-4077-9bc0-ee3c78b37984" width="250" alt="알림 설정" /><br/>
      <sub>알림 ON/OFF 설정</sub>
    </td>
  </tr>
</table>

</details>

<details>
<summary>⭐️ FCM 알림</summary>

<br/>

#### 📋 기능 설명
- 새로운 공지사항이 발생하면 즉시 푸시 알림이 발송됩니다.
- 키워드와 학교 조건에 따라 맞춤 알림을 제공합니다.

#### 💻 구현 방식
- `Firebase Cloud Messaging (FCM)` 사용
- 클라이언트에서 수신 동의 시 FCM 토큰을 발급받아 서버에 저장
- 서버는 키워드와 학교 조건에 맞는 유저를 필터링하여 알림 전송

#### 📸 관련 이미지

<table>
  <tr>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/ead5a55e-f85f-402a-bb0f-3a795ecd50fb" width="250" alt="푸시 알림 페이지" /><br/>
      <sub>푸시 알림 페이지</sub>
    </td>
<!--     <td align="center">
      <img src="이미지_주소_2" width="250" alt="알림 예시 2" /><br/>
      <sub>푸시 알림 2</sub>
    </td> -->
  </tr>
</table>

</details>

<details>
<summary>⭐️ PWA</summary>

<br/>

#### 📋 기능 설명
- 모바일에서도 앱처럼 사용할 수 있도록 PWA를 지원합니다.
- 홈 화면에 설치해 앱처럼 실행 가능합니다.
  
#### 💻 구현 방식 ( 구현 예 )
- `Next.js App Router` + `next-pwa` 플러그인 사용
- 서비스 워커 및 매니페스트 설정 (`manifest.json`, `service-worker.js`)
- 홈 화면 설치를 위한 설치 프롬프트 처리

#### 📸 관련 이미지

<table>
  <tr>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/e275af3e-e993-45a2-bee0-481d11e4fc8c" width="250" alt="PWA 설치" /><br/>
      <sub>PWA 설치 안내</sub>
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

|  성지훈 (Front-end) |  박준형 (Back-end) |  엄지호 (Back-end) |
|------------------|------------------|------------------|


