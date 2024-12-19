import React from 'react'
import { SVGProps } from 'react'

export const Icons = {
  mortgageCalculator: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-house-up"
      viewBox="0 0 16 16"
    >
      <path d="M7.293 1.5a1 1 0 0 1 1.414 0L11 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l2.354 2.353a.5.5 0 0 1-.708.708L8 2.207l-5 5V13.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 2 13.5V8.207l-.646.647a.5.5 0 1 1-.708-.708z" />
      <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.354-5.854 1.5 1.5a.5.5 0 0 1-.708.708L13 11.707V14.5a.5.5 0 1 1-1 0v-2.793l-.646.647a.5.5 0 0 1-.708-.707l1.5-1.5a.5.5 0 0 1 .708 0Z" />
    </svg>
  ),
  networthCalculator: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-piggy-bank-fill"
      viewBox="0 0 16 16"
    >
      <path d="M7.964 1.527c-2.977 0-5.571 1.704-6.32 4.125h-.55A1 1 0 0 0 .11 6.824l.254 1.46a1.5 1.5 0 0 0 1.478 1.243h.263c.3.513.688.978 1.145 1.382l-.729 2.477a.5.5 0 0 0 .48.641h2a.5.5 0 0 0 .471-.332l.482-1.351c.635.173 1.31.267 2.011.267.707 0 1.388-.095 2.028-.272l.543 1.372a.5.5 0 0 0 .465.316h2a.5.5 0 0 0 .478-.645l-.761-2.506C13.81 9.895 14.5 8.559 14.5 7.069q0-.218-.02-.431c.261-.11.508-.266.705-.444.315.306.815.306.815-.417 0 .223-.5.223-.461-.026a1 1 0 0 0 .09-.255.7.7 0 0 0-.202-.645.58.58 0 0 0-.707-.098.74.74 0 0 0-.375.562c-.024.243.082.48.32.654a2 2 0 0 1-.259.153c-.534-2.664-3.284-4.595-6.442-4.595m7.173 3.876a.6.6 0 0 1-.098.21l-.044-.025c-.146-.09-.157-.175-.152-.223a.24.24 0 0 1 .117-.173c.049-.027.08-.021.113.012a.2.2 0 0 1 .064.199m-8.999-.65a.5.5 0 1 1-.276-.96A7.6 7.6 0 0 1 7.964 3.5c.763 0 1.497.11 2.18.315a.5.5 0 1 1-.287.958A6.6 6.6 0 0 0 7.964 4.5c-.64 0-1.255.09-1.826.254ZM5 6.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0" />
    </svg>
  ),
  github: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="currentColor"
      className="bi bi-github"
      viewBox="0 0 16 16"
    >
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
    </svg>
  ),
}
export const Logo = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 251 68" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M73.5792 31.6879C71.9509 31.6879 70.5856 32.3382 70.2424 33.2057H61.016L57.4981 29.7615L64.7754 25.6248C65.2994 25.8029 65.9 25.8981 66.5265 25.8981C67.4401 25.8981 68.2991 25.6957 68.9452 25.3285C69.5913 24.9612 69.9471 24.4729 69.9471 23.9535C69.9471 23.4342 69.5912 22.9459 68.9452 22.5787L68.9451 22.5786C68.2991 22.2114 67.4401 22.0091 66.5265 22.0091C65.6128 22.0091 64.7538 22.2113 64.1077 22.5786C62.9792 23.2201 62.8059 24.2021 63.5873 24.9484L56.6248 28.9063L55.484 27.7893H50.3188V21.8321C51.8107 21.6229 52.9206 20.8562 52.9206 19.9444C52.9205 18.8722 51.386 18 49.4998 18C47.6137 18 46.0792 18.8722 46.0792 19.9445C46.0792 20.8474 47.1673 21.6083 48.6371 21.8262V27.7893H43.5159L42.375 28.9064L35.4132 24.9489C35.7266 24.6511 35.8939 24.3096 35.8939 23.9535C35.8939 23.4342 35.538 22.9459 34.892 22.5786C34.2459 22.2113 33.3869 22.0091 32.4732 22.0091C31.5596 22.0091 30.7006 22.2114 30.0546 22.5786L30.0545 22.5787C29.4084 22.9459 29.0526 23.4342 29.0526 23.9535C29.0526 24.4729 29.4083 24.9612 30.0545 25.3284C30.7006 25.6957 31.5596 25.898 32.4732 25.898C33.0996 25.898 33.7002 25.8029 34.2243 25.6247L41.5017 29.7615L37.9837 33.2057H28.7573C28.4141 32.3381 27.0488 31.6879 25.4205 31.6879C23.5344 31.6879 22 32.5602 22 33.6323C22 34.7045 23.5344 35.5768 25.4206 35.5768C26.984 35.5768 28.3049 34.9772 28.7115 34.1615H38.0488L41.4765 37.5173L34.2234 41.6404C32.9105 41.1962 31.1832 41.2946 30.0546 41.9362C29.4084 42.3035 29.0527 42.7917 29.0527 43.3111C29.0527 43.8305 29.4086 44.3188 30.0546 44.686C30.7007 45.0533 31.5597 45.2555 32.4733 45.2555C33.387 45.2555 34.246 45.0533 34.892 44.686C35.5381 44.3187 35.8939 43.8304 35.8939 43.3111C35.8939 42.955 35.7266 42.6136 35.4132 42.3157L42.3499 38.3724L43.5159 39.514H48.6371V45.4384C47.1672 45.6563 46.0792 46.4173 46.0792 47.3201C46.0792 48.3923 47.6136 49.2647 49.4998 49.2647C51.3861 49.2647 52.9205 48.3924 52.9205 47.3201C52.9205 46.4083 51.8106 45.6415 50.3187 45.4324V39.514H55.4839L56.6498 38.3725L63.5874 42.3162C62.8061 43.0625 62.9792 44.0445 64.1078 44.686C64.7539 45.0533 65.6129 45.2555 66.5266 45.2555C67.4402 45.2555 68.2992 45.0532 68.9452 44.686C69.5913 44.3187 69.9471 43.8304 69.9471 43.3111C69.9471 42.7917 69.5913 42.3034 68.9452 41.9361C67.8167 41.2946 66.0893 41.1962 64.7764 41.6404L57.5234 37.5173L60.9511 34.1615H70.2884C70.695 34.9771 72.0157 35.5767 73.5793 35.5767C75.4654 35.5767 77 34.7045 77 33.6323C76.9999 32.56 75.4653 31.6879 73.5792 31.6879ZM65.2967 23.2545C65.6252 23.0677 66.0619 22.9649 66.5266 22.9649C66.9911 22.9649 67.4279 23.0677 67.7564 23.2545L67.7565 23.2545C68.0849 23.4412 68.2659 23.6895 68.2659 23.9535C68.2659 24.2176 68.085 24.4659 67.7564 24.6527C67.4279 24.8394 66.9912 24.9423 66.5266 24.9423C66.062 24.9423 65.6252 24.8394 65.2967 24.6527C64.6186 24.2671 64.6186 23.64 65.2967 23.2545ZM33.7029 24.6526C33.3745 24.8394 32.9378 24.9422 32.4731 24.9422C32.0086 24.9422 31.5718 24.8394 31.2434 24.6526C30.9148 24.4659 30.7339 24.2176 30.7339 23.9535C30.7339 23.6894 30.9148 23.4411 31.2433 23.2545L31.2434 23.2544C31.5718 23.0677 32.0086 22.9648 32.4731 22.9648C32.9377 22.9648 33.3745 23.0677 33.7031 23.2545C34.0315 23.4411 34.2124 23.6894 34.2124 23.9535C34.2124 24.2176 34.0315 24.4659 33.7029 24.6526ZM25.4206 34.621C24.4617 34.621 23.6815 34.1775 23.6815 33.6324C23.6815 33.0873 24.4617 32.6438 25.4206 32.6438C26.3796 32.6438 27.1598 33.0873 27.1598 33.6324C27.1598 34.1775 26.3796 34.621 25.4206 34.621ZM33.7029 44.0103C33.3745 44.1971 32.9378 44.2999 32.4731 44.2999C32.0086 44.2999 31.5718 44.1971 31.2433 44.0103C30.9148 43.8235 30.7339 43.5753 30.7339 43.3112C30.7339 43.0471 30.9148 42.7988 31.2434 42.6121C31.5824 42.4194 32.0278 42.323 32.4731 42.323C32.9186 42.323 33.3638 42.4194 33.7029 42.6121C34.0315 42.7988 34.2124 43.047 34.2124 43.3112C34.2124 43.5752 34.0315 43.8236 33.7029 44.0103ZM65.2967 42.6121C65.9749 42.2267 67.0783 42.2267 67.7563 42.6121C68.0849 42.7989 68.2658 43.0471 68.2658 43.3113C68.2658 43.5753 68.0849 43.8236 67.7563 44.0104C67.4278 44.1971 66.9911 44.3 66.5265 44.3C66.0619 44.3 65.6251 44.1971 65.2966 44.0103C64.6187 43.6248 64.6186 42.9977 65.2967 42.6121ZM47.7608 19.9445C47.7608 19.3993 48.541 18.9558 49.4999 18.9558C50.4589 18.9558 51.2391 19.3993 51.2391 19.9445C51.2391 20.4896 50.4589 20.9331 49.4999 20.9331C48.541 20.9331 47.7608 20.4895 47.7608 19.9445ZM51.239 47.3203C51.239 47.8655 50.4588 48.309 49.4998 48.309C48.5409 48.309 47.7607 47.8655 47.7607 47.3203C47.7607 46.7752 48.5409 46.3317 49.4998 46.3317C50.4588 46.3317 51.239 46.7752 51.239 47.3203ZM54.5157 38.5584H44.4841L39.4725 33.6517L44.4841 28.7451H54.5157L59.5273 33.6517L54.5157 38.5584ZM73.5792 34.621C72.6202 34.621 71.84 34.1775 71.84 33.6324C71.84 33.0873 72.6202 32.6438 73.5792 32.6438C74.5382 32.6438 75.3184 33.0873 75.3184 33.6324C75.3184 34.1775 74.5382 34.621 73.5792 34.621Z"
      fill="#716F6F"
    />
    <path d="M50.4312 33.206H48.6377V34.1618H50.4312V33.206Z" fill="black" />
    <path d="M52.8974 33.206H51.2159V34.1618H52.8974V33.206Z" fill="black" />
    <path d="M47.853 33.206H46.0594V34.1618H47.853V33.206Z" fill="black" />
    <path
      d="M79.5781 30.4375C79.5781 28.8281 79.9688 27.3672 80.75 26.0547C81.5469 24.7422 82.6094 23.6953 83.9375 22.9141C85.2656 22.1172 86.7344 21.7188 88.3438 21.7188H101.891V46H96.9453V26.6641H88.3438C87.2969 26.6641 86.3984 27.0391 85.6484 27.7891C84.8984 28.5234 84.5234 29.4219 84.5234 30.4844V37.1875C84.5234 38.25 84.8984 39.1641 85.6484 39.9297C86.3984 40.6797 87.2969 41.0547 88.3438 41.0547H94.1328V46H88.3438C86.7344 46 85.2656 45.6094 83.9375 44.8281C82.6094 44.0312 81.5469 42.9688 80.75 41.6406C79.9688 40.3125 79.5781 38.8438 79.5781 37.2344V30.4375ZM110.891 21.7188L117.195 38.5469L123.641 21.7188H129.102L116.211 55.1406H110.797L114.57 45.2031L105.641 21.7188H110.891ZM132.406 30.4844C132.406 28.875 132.797 27.4062 133.578 26.0781C134.375 24.75 135.438 23.6953 136.766 22.9141C138.094 22.1172 139.562 21.7188 141.172 21.7188H146.469C148.078 21.7188 149.547 22.1172 150.875 22.9141C152.203 23.6953 153.258 24.75 154.039 26.0781C154.836 27.4062 155.234 28.875 155.234 30.4844V37.2344C155.234 38.8438 154.836 40.3125 154.039 41.6406C153.258 42.9688 152.203 44.0312 150.875 44.8281C149.547 45.6094 148.078 46 146.469 46H141.172C139.562 46 138.094 45.6094 136.766 44.8281C135.438 44.0312 134.375 42.9688 133.578 41.6406C132.797 40.3125 132.406 38.8438 132.406 37.2344V30.4844ZM137.352 37.1875C137.352 38.25 137.727 39.1641 138.477 39.9297C139.227 40.6797 140.125 41.0547 141.172 41.0547H146.469C147.531 41.0547 148.43 40.6797 149.164 39.9297C149.914 39.1641 150.289 38.25 150.289 37.1875V30.5312C150.289 29.4688 149.914 28.5625 149.164 27.8125C148.43 27.0469 147.531 26.6641 146.469 26.6641H141.172C140.125 26.6641 139.227 27.0469 138.477 27.8125C137.727 28.5625 137.352 29.4688 137.352 30.5312V37.1875ZM160.391 30.4844C160.391 28.875 160.781 27.4062 161.562 26.0781C162.359 24.75 163.422 23.6953 164.75 22.9141C166.078 22.1172 167.547 21.7188 169.156 21.7188H174.945V26.6641H169.156C168.109 26.6641 167.211 27.0469 166.461 27.8125C165.711 28.5625 165.336 29.4688 165.336 30.5312V37.2344C165.336 38.2812 165.711 39.1797 166.461 39.9297C167.211 40.6797 168.109 41.0547 169.156 41.0547H177.758V12.6719H182.703V41.0547C182.703 42.4141 182.219 43.5781 181.25 44.5469C180.281 45.5156 179.117 46 177.758 46H169.156C167.547 46 166.078 45.6094 164.75 44.8281C163.422 44.0312 162.359 42.9766 161.562 41.6641C160.781 40.3359 160.391 38.875 160.391 37.2812V30.4844ZM188.094 30.4375C188.094 28.8281 188.484 27.3672 189.266 26.0547C190.062 24.7422 191.125 23.6953 192.453 22.9141C193.781 22.1172 195.25 21.7188 196.859 21.7188H210.406V46H205.461V26.6641H196.859C195.812 26.6641 194.914 27.0391 194.164 27.7891C193.414 28.5234 193.039 29.4219 193.039 30.4844V37.1875C193.039 38.25 193.414 39.1641 194.164 39.9297C194.914 40.6797 195.812 41.0547 196.859 41.0547H202.648V46H196.859C195.25 46 193.781 45.6094 192.453 44.8281C191.125 44.0312 190.062 42.9688 189.266 41.6406C188.484 40.3125 188.094 38.8438 188.094 37.2344V30.4375ZM215.469 15.1094C215.469 14.2656 215.766 13.5469 216.359 12.9531C216.953 12.3594 217.672 12.0625 218.516 12.0625C219.359 12.0625 220.078 12.3594 220.672 12.9531C221.266 13.5469 221.562 14.2656 221.562 15.1094C221.562 15.9531 221.266 16.6719 220.672 17.2656C220.078 17.8594 219.359 18.1562 218.516 18.1562C217.672 18.1562 216.953 17.8594 216.359 17.2656C215.766 16.6719 215.469 15.9531 215.469 15.1094ZM216.031 21.7188H221V46H216.031V21.7188Z"
      fill="black"
    />
  </svg>
)

export const RightArrowHead = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <path
        d="M15.1997 10.4919L13.2297 8.52188L10.0197 5.31188C9.33969 4.64188 8.17969 5.12188 8.17969 6.08188V12.3119V17.9219C8.17969 18.8819 9.33969 19.3619 10.0197 18.6819L15.1997 13.5019C16.0297 12.6819 16.0297 11.3219 15.1997 10.4919Z"
        fill="#292D32"
      ></path>
    </g>
  </svg>
)
