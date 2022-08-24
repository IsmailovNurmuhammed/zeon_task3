import React from 'react';

const SvgIcon = ({id}) => {
  switch (id) {
    case "calendar":
      return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd"
              d="M7 4.43245C7 4.27684 7 4.19903 6.9491 4.15423C6.89819 4.10944 6.82244 4.11915 6.67094 4.13857C5.54965 4.28229 4.76806 4.57508 4.17157 5.17157C3 6.34315 3 8.22876 3 12C3 15.7712 3 17.6569 4.17157 18.8284C5.34315 20 7.22876 20 11 20H13C16.7712 20 18.6569 20 19.8284 18.8284C21 17.6569 21 15.7712 21 12C21 8.22876 21 6.34315 19.8284 5.17157C19.2319 4.57508 18.4504 4.28229 17.3291 4.13857C17.1776 4.11915 17.1018 4.10944 17.0509 4.15424C17 4.19903 17 4.27684 17 4.43245L17 6.5C17 7.32843 16.3284 8 15.5 8C14.6716 8 14 7.32843 14 6.5L14 4.30005C14 4.15898 14 4.08844 13.9561 4.04451C13.9123 4.00059 13.8418 4.0005 13.7009 4.00031C13.4748 4 13.2412 4 13 4H11C10.7588 4 10.5252 4 10.2991 4.00031C10.1582 4.0005 10.0877 4.00059 10.0439 4.04452C10 4.08844 10 4.15898 10 4.30005L10 6.5C10 7.32843 9.32843 8 8.50001 8C7.67158 8 7 7.32843 7 6.5L7 4.43245Z"
              fill="#1F2228"/>
        <path d="M8.5 2.5L8.5 6.5" stroke="white" strokeLinecap="round"/>
        <path d="M15.5 2.5L15.5 6.5" stroke="white" strokeLinecap="round"/>
        <circle cx="7.5" cy="10.5" r="0.5" fill="white"/>
        <circle cx="10.5" cy="10.5" r="0.5" fill="white"/>
        <circle cx="13.5" cy="10.5" r="0.5" fill="white"/>
        <circle cx="16.5" cy="10.5" r="0.5" fill="white"/>
        <circle cx="7.5" cy="13.5" r="0.5" fill="white"/>
        <circle cx="10.5" cy="13.5" r="0.5" fill="white"/>
        <circle cx="13.5" cy="13.5" r="0.5" fill="white"/>
        <circle cx="16.5" cy="13.5" r="0.5" fill="white"/>
        <circle cx="7.5" cy="16.5" r="0.5" fill="white"/>
        <circle cx="10.5" cy="16.5" r="0.5" fill="white"/>
        <circle cx="13.5" cy="16.5" r="0.5" fill="white"/>
        <circle cx="16.5" cy="16.5" r="0.5" fill="white"/>
      </svg>
    case "calendar_add":
      return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd"
              d="M7 4.43245C7 4.27684 7 4.19903 6.9491 4.15423C6.89819 4.10944 6.82244 4.11915 6.67094 4.13857C5.54965 4.28229 4.76806 4.57508 4.17157 5.17157C3 6.34315 3 8.22876 3 12C3 15.7712 3 17.6569 4.17157 18.8284C5.34315 20 7.22876 20 11 20H13C16.7712 20 18.6569 20 19.8284 18.8284C21 17.6569 21 15.7712 21 12C21 8.22876 21 6.34315 19.8284 5.17157C19.2319 4.57508 18.4504 4.28229 17.3291 4.13857C17.1776 4.11915 17.1018 4.10944 17.0509 4.15424C17 4.19903 17 4.27684 17 4.43245L17 6.5C17 7.32843 16.3284 8 15.5 8C14.6716 8 14 7.32843 14 6.5L14 4.30005C14 4.15898 14 4.08844 13.9561 4.04451C13.9123 4.00059 13.8418 4.0005 13.7009 4.00031C13.4748 4 13.2412 4 13 4H11C10.7588 4 10.5252 4 10.2991 4.00031C10.1582 4.0005 10.0877 4.00059 10.0439 4.04452C10 4.08844 10 4.15898 10 4.30005L10 6.5C10 7.32843 9.32843 8 8.50001 8C7.67158 8 7 7.32843 7 6.5L7 4.43245Z"
              fill="#1F2228"/>
        <path d="M8.5 2.5L8.5 6.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M15.5 2.5L15.5 6.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M12 16L12 10" stroke="white" strokeWidth="1.2" strokeLinecap="square"/>
        <path d="M15 13L9 13" stroke="white" strokeWidth="1.2" strokeLinecap="square"/>
      </svg>
    case "calendar_today":
      return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd"
              d="M7 4.01833C6.46047 4.04114 6.07192 4.09237 5.72883 4.20736C4.53947 4.60599 3.60599 5.53947 3.20736 6.72883C3 7.3475 3 8.11402 3 9.64706C3 9.74287 3 9.79078 3.01296 9.82945C3.03787 9.90378 3.09622 9.96213 3.17055 9.98704C3.20922 10 3.25713 10 3.35294 10H20.6471C20.7429 10 20.7908 10 20.8294 9.98704C20.9038 9.96213 20.9621 9.90378 20.987 9.82945C21 9.79078 21 9.74287 21 9.64706C21 8.11402 21 7.3475 20.7926 6.72883C20.394 5.53947 19.4605 4.60599 18.2712 4.20736C17.9281 4.09237 17.5395 4.04114 17 4.01833L17 6.5C17 7.32843 16.3284 8 15.5 8C14.6716 8 14 7.32843 14 6.5L14 4H10L10 6.5C10 7.32843 9.32843 8 8.50001 8C7.67158 8 7 7.32843 7 6.5L7 4.01833Z"
              fill="white"/>
        <path
          d="M3 11.5C3 11.2643 3 11.1464 3.07322 11.0732C3.14645 11 3.2643 11 3.5 11H20.5C20.7357 11 20.8536 11 20.9268 11.0732C21 11.1464 21 11.2643 21 11.5V12C21 15.7712 21 17.6569 19.8284 18.8284C18.6569 20 16.7712 20 13 20H11C7.22876 20 5.34315 20 4.17157 18.8284C3 17.6569 3 15.7712 3 12V11.5Z"
          fill="#1F2228"/>
        <path d="M8.5 2.5L8.5 6.5" stroke="white" strokeLinecap="round"/>
        <path d="M15.5 2.5L15.5 6.5" stroke="white" strokeLinecap="round"/>
      </svg>
    case "arrow":
      return <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M2 7L1.29289 6.29289L0.585786 7L1.29289 7.70711L2 7ZM7.29289 0.292893L1.29289 6.29289L2.70711 7.70711L8.70711 1.70711L7.29289 0.292893ZM1.29289 7.70711L7.29289 13.7071L8.70711 12.2929L2.70711 6.29289L1.29289 7.70711Z"
          fill="white"/>
      </svg>
    case "arrow_right":
      return <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7 7L7.70711 6.29289L8.41421 7L7.70711 7.70711L7 7ZM1.70711 0.292893L7.70711 6.29289L6.29289 7.70711L0.292893 1.70711L1.70711 0.292893ZM7.70711 7.70711L1.70711 13.7071L0.292893 12.2929L6.29289 6.29289L7.70711 7.70711Z"
          fill="white"/>
      </svg>
    case "bookmark":
      return <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M3.33337 7.5C3.33337 5.14298 3.33337 3.96447 4.06561 3.23223C4.79784 2.5 5.97635 2.5 8.33337 2.5H11.6667C14.0237 2.5 15.2022 2.5 15.9345 3.23223C16.6667 3.96447 16.6667 5.14298 16.6667 7.5V13.1897C16.6667 15.4257 16.6667 16.5438 15.9631 16.8857C15.2596 17.2277 14.3804 16.537 12.6222 15.1555L12.0594 14.7133C11.0708 13.9365 10.5765 13.5482 10 13.5482C9.4236 13.5482 8.92928 13.9365 7.94063 14.7133L7.37793 15.1555C5.61966 16.537 4.74053 17.2277 4.03695 16.8857C3.33337 16.5438 3.33337 15.4257 3.33337 13.1897V7.5Z"
          stroke="#1F2228" strokeWidth="2"/>
      </svg>
    case "description":
      return <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="1" y1="1" x2="19" y2="1" stroke="#1F2228" strokeWidth="2" strokeLinecap="round"/>
        <path d="M6.5 6H19" stroke="#1F2228" strokeWidth="2" strokeLinecap="round"/>
        <path d="M3 11H19" stroke="#1F2228" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    case "iks":
      return <svg width="18" height="18" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L13 13" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13 1L1 13" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    case "menu":
      return <svg width="20" height="7" viewBox="0 0 20 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="1" y1="1" x2="19" y2="1" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
        <line x1="1" y1="6" x2="19" y2="6" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    case "time":
      return <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="9.99998" cy="10" r="7.66667" stroke="#1F2228" strokeWidth="2"/>
        <path d="M13.75 10H10.25C10.1119 10 10 9.88811 10 9.75004V7.08337" stroke="#1F2228" strokeWidth="2"
              strokeLinecap="round"/>
      </svg>
    case "check":
      return <svg width="12" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 9L5 12L14 1" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    case "trash":
      return <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.33331 12.5L8.33331 10" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
        <path d="M11.6667 12.5L11.6667 10" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
        <path
          d="M2.5 5.83337H17.5V5.83337C17.0353 5.83337 16.803 5.83337 16.6098 5.8718C15.8164 6.02962 15.1962 6.64981 15.0384 7.44319C15 7.63639 15 7.86872 15 8.33337V12.6667C15 14.5523 15 15.4951 14.4142 16.0809C13.8284 16.6667 12.8856 16.6667 11 16.6667H9C7.11438 16.6667 6.17157 16.6667 5.58579 16.0809C5 15.4951 5 14.5523 5 12.6667V8.33337C5 7.86872 5 7.63639 4.96157 7.44319C4.80376 6.64981 4.18356 6.02962 3.39018 5.8718C3.19698 5.83337 2.96466 5.83337 2.5 5.83337V5.83337Z"
          stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
        <path
          d="M8.39014 2.80883C8.4851 2.72023 8.69434 2.64194 8.98542 2.5861C9.27649 2.53027 9.63313 2.5 10 2.5C10.3669 2.5 10.7235 2.53027 11.0146 2.5861C11.3057 2.64194 11.5149 2.72023 11.6099 2.80883"
          stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    default:
      return <svg></svg>
  }
};

export default SvgIcon;