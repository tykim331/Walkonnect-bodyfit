export interface Participant {
  name: string;
  isWinner: boolean;
  department?: string;
  badge?: string;
}

export const WINNERS: string[] = [
  '김경모',
  '김미나',
  '서창대',
  '김지영',
  '강준규',
  '박현우',
  '임민재',
  '최원석',
  '박신용',
  '김태연',
  '하태혁',
  '안은비',
  '문효식',
  '이민석',
  '최연택',
  '배상이',
  '이정민',
  '조광래',
  '김아현',
  '김시진',
];

export const NON_WINNERS: string[] = [
  '김태윤',
  '권수연',
  '왕현수',
  '김상형',
  '김무겸',
  '백승윤',
  '송형근',
  '박달',
  '장남희',
  '박세진',
  '조재학',
  '김병주',
  '이지연',
  '조우철',
  '김종빈',
  '이성훈',
  '김동원',
  '장준호',
  '정승우',
  '임지열',
];

export const ALL_PARTICIPANTS: Participant[] = [
  ...WINNERS.map(name => ({ name, isWinner: true })),
  ...NON_WINNERS.map(name => ({ name, isWinner: false })),
];

export const CHALLENGE_INFO = {
  title: '2026 Walkonnect BODY-FIT 근력 챌린지',
  subtitle: '2~3주차 주간 미션 결과 발표',
  missionName: '주간 미션: 10일 동안, 3회 이상 운동 후 인증하기!',
  missionPeriod: '2026.09.18(금) 저녁 ~ 09.27(일)',
  missionCondition: '기간 내 총 3회 이상 운동 인증 (※ 동일 일자 운동은 1회만 인정)',
  rewardName: '아디다스 에센셜 헬스 장갑',
  rewardQuota: '미션 달성자 中 20명 선정',
  surveyUrl: 'https://forms.cloud.microsoft/r/pzr5GcBQ6F',
  mainChallengeUrl: 'https://body-fit-challenge-sign-in.vercel.app/',
  host: 'Hyundai Corporation Group',
};

export interface SizeItem {
  size: 'XS' | 'S' | 'M' | 'L' | 'XL';
  range: string;
  min: number;
  max: number;
  description: string;
}

export const SIZE_GUIDE_DATA: SizeItem[] = [
  { size: 'XS', range: '18cm - 19cm', min: 18, max: 19, description: '손이 매우 작거나 슬림한 체형' },
  { size: 'S', range: '19cm - 20cm', min: 19, max: 20, description: '여성 평균 또는 손이 작은 남성' },
  { size: 'M', range: '20cm - 21.5cm', min: 20, max: 21.5, description: '남성 평균 또는 손이 여유있는 여성' },
  { size: 'L', range: '21.5cm - 23cm', min: 21.5, max: 23, description: '남성 표준 ~ 손이 약간 큰 체형' },
  { size: 'XL', range: '23cm - 24.5cm', min: 23, max: 24.5, description: '손바닥이 크거나 두터운 체형' },
];
