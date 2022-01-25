# 1주차 환율 계산기 과제

> Pre Onboarding 1st 과제 - Calculator <br/>

#### 서비스 링크 : http://wantedpreonboarding01.s3-website.ap-northeast-2.amazonaws.com/

## 1. firstCalc - 태림, 수영

 * 기능 해부
    * [x] 환율 API fetch
    * [x] 버튼 조건부 렌더링
    * [x] select box 선택 시 환율 변경
    * [x] 숫자 포매팅
    * [x] 디폴트 KRW 값 버그
    * [x] 송금액 조건 처리
    * [x] 사용자 input 구현     


## 2. secondCalc - 종원, 중섭

 * 기능 해부
    * 사용자 input 
      * 사용자 input창에는 **숫자**만 입력 가능하다
      * 값이 1000 이상일 경우에는 1000으로 반환한다
      * 1000일 때 자릿수 콤마 표현한다
      * 사용자가 입력한 값을 저장 후 환율 API와 연산하여 환율 계산하는 것으로 예상
   
    * 변경하는 통화 dropdown 
       * USD,CAD,KRW, HKD,JPY,CNY 등으로 구성 -> 드롭다운을 어떤 방식으로 표현할까?
       * 사용자가 통화를 선택할 때 그 값이 state 저장되는 것 필요
     
    * 변경될 통화 tab 
       * 선택한 통화를 제외한 통화만 tab에 나열
       * tab을 클릭할 시 클릭한 tab의 통화가 정보창에 렌더링
       * 렌더링 시 기준일은 새로운 날짜값을 받아 옴 -> 2022-Jan-01 형식으로
       * 사용자가 통화를 선택했을 때 새로 생성된 tab의 배열을 기준으로 첫 번째 tab이 선택되도록 구현
       * 선택된 tab은 다른 버튼과 달리 border-bottom이 없어 정보창과 이어진 것처럼 표현     

 
### 버전 관리
  * 기본적으로 main branch가 최종적으로 병합되는 default branch 이다. 
  * 첫 번째 계산기 기능을 하는 환율계산기를 firstCalc로 지정하고 새로운 브랜치를 생성했다.
  * 두 번째 계산기 기능을 하는 환율계산기를 secondCalc라고 지정하고 새로운 브랜치를 생성했다.
      * 두 번째 계산기 기능에서 새로운 기능 구현은 Add:, 기능 및 스타일링 수정은 Modify:, 부족했던 기능 업데이트는 Refactor:, main branch 와 병합할 때는 Merge:, 삭제할 때는 Delete: 로 커밋 메시지를 작성하였다.

### 개선 사항
  * 종원
      * git branch 관리 미흡 -> 기능 별로 branch 관리를 철저히 할 필요가 있음
      * JS 문법 - 정규식, 기능함수 등 공부할 필요가 있음
      * 팀 협업의 어려움 -> 소통, 정보 공유 등이 필요
      
  * 중섭
      * 효율적인 협업 미흡 -> 소통을 자주 할 필요가 있음

  * 태림
      * 어떤 상황에서 component를 분리해야 할지 잘 모르겠음 
      * react 상태 관리 학습 필요

  * 수영
      * 네이밍 컨벤션의 중요성 실감
      * git branch 관리에 대한 학습 필요 
  
        
### 진행 상황        
   * [ ] 사용자 input 구현     
   * [ ] dropdown 방식의 통화 선택 기능 구현 
   * [ ] 통화가 나열되어있는 tab 구현
   * [ ] 유저가 입력한 input 값 
   * [ ] 
   * [ ] 
   * [ ] 
