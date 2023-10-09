import React from 'react';

export default function Dinners({ color }: { color: string }) {
  return (
    <svg
      width="48"
      height="45"
      viewBox="0 0 48 45"
      className={`${color} transition-all duration-200 myRecepIcon`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M39.3835 13.8813C39.5725 14.2418 39.751 14.5823 39.8372 14.9488C40.0569 15.8837 39.6778 16.9734 39.323 17.8183C39.2603 17.9675 39.2522 18.1341 39.3001 18.2887C39.348 18.4433 39.4488 18.5761 39.5849 18.6637C39.721 18.7514 39.8835 18.7883 40.0441 18.768C40.2047 18.7477 40.353 18.6715 40.4629 18.5527C40.7475 18.2456 41.0415 17.9572 41.3529 17.652C41.7752 17.238 42.2118 16.8099 42.6188 16.3338C42.969 15.9241 43.7561 14.8235 43.5034 13.4565C43.4015 12.906 43.1574 12.4585 42.9421 12.0636C42.908 12.001 42.874 11.9386 42.8407 11.876C42.5295 11.2913 42.4457 10.8261 42.5695 10.3678C42.6488 10.0827 42.7551 9.8058 42.8871 9.54091C43.0178 9.43894 43.1074 9.29322 43.1393 9.13052C43.1712 8.96782 43.1434 8.79906 43.0609 8.65525C42.9783 8.51145 42.8467 8.40224 42.6901 8.3477C42.5335 8.29317 42.3625 8.29696 42.2085 8.35838H42.2085C41.2801 8.72851 39.5521 9.41744 38.9533 10.8384C38.6569 11.5415 38.6781 12.3108 39.0161 13.1247C39.1288 13.3959 39.2583 13.6427 39.3835 13.8813ZM40.2221 11.3732C40.3877 10.9806 40.7485 10.6542 41.1639 10.3865C41.0723 11.0679 41.2247 11.7707 41.6252 12.5231C41.6607 12.5897 41.697 12.6562 41.7332 12.7229C41.9154 13.057 42.0876 13.3724 42.1494 13.7069C42.2985 14.5132 41.7452 15.2365 41.572 15.4391C41.4747 15.5528 41.3751 15.6645 41.2732 15.7742C41.2953 15.3914 41.2631 15.0075 41.1777 14.6337C41.0515 14.0973 40.8234 13.6624 40.6028 13.2418C40.4866 13.0202 40.3768 12.8108 40.2878 12.5965C40.0936 12.1291 40.0722 11.729 40.2221 11.3732ZM47.1883 38.0698C47.1262 37.972 47.0403 37.8915 46.9388 37.8357C46.8372 37.7799 46.7232 37.7506 46.6073 37.7506H40.9804C43.2425 35.4464 44.9816 32.0199 44.2359 28.7111C43.6335 26.0384 41.6826 24.5979 38.7295 22.4174L38.3295 22.1219C37.5339 21.5333 36.7111 20.9246 35.819 20.3193C35.7442 20.2678 35.66 20.2315 35.5711 20.2127C35.4823 20.1938 35.3905 20.1928 35.3013 20.2095C35.212 20.2263 35.1269 20.2605 35.0509 20.3103C34.9749 20.3601 34.9096 20.4244 34.8586 20.4996C34.8076 20.5748 34.7719 20.6593 34.7537 20.7483C34.7356 20.8373 34.7352 20.929 34.7526 21.0182C34.77 21.1073 34.8049 21.1921 34.8552 21.2678C34.9056 21.3434 34.9704 21.4083 35.0459 21.4587C35.9149 22.0483 36.726 22.6484 37.5113 23.2294L37.9115 23.5252C40.7124 25.5932 42.4031 26.8414 42.8926 29.0139C43.3266 30.9397 42.6811 32.7667 42.0631 33.9604C41.2892 35.4263 40.221 36.7166 38.9253 37.7506H35.3978C35.5863 37.4728 35.8401 37.2454 36.1369 37.0883C36.4508 36.9267 36.8016 36.8502 37.1543 36.8665C37.3447 36.8728 37.5336 36.8314 37.704 36.7462C37.8744 36.661 38.0208 36.5346 38.13 36.3786C38.2392 36.2225 38.3077 36.0416 38.3294 35.8524C38.351 35.6631 38.3251 35.4714 38.254 35.2947C38.0849 34.8893 38.0452 34.4416 38.1402 34.0128C38.2623 33.4935 38.565 33.0345 38.9944 32.7179C39.1181 32.6236 39.2212 32.505 39.2975 32.3694C39.3738 32.2339 39.4217 32.0842 39.4381 31.9295C39.4546 31.7748 39.4393 31.6184 39.3932 31.4699C39.3471 31.3213 39.2712 31.1837 39.1702 31.0654C38.8672 30.7244 38.6932 30.2879 38.6785 29.832C38.6741 29.4898 38.761 29.1526 38.9303 28.8552C39.0133 28.7053 39.0444 28.532 39.0185 28.3626C38.9926 28.1931 38.9112 28.0371 38.7872 27.9188C38.6632 27.8005 38.5034 27.7266 38.3329 27.7088C38.1624 27.6909 37.9908 27.7301 37.845 27.8202C37.5559 28.0033 37.2232 28.1061 36.8812 28.1179C36.425 28.125 35.9808 27.9718 35.6259 27.685C35.503 27.5896 35.3619 27.5203 35.2114 27.4814C35.0608 27.4424 34.9038 27.4345 34.7501 27.4583C34.5963 27.4821 34.4491 27.5369 34.3173 27.6196C34.1855 27.7022 34.072 27.8109 33.9836 27.9389C33.6876 28.3827 33.2435 28.7067 32.7306 28.8532C32.3067 28.9684 31.8576 28.9498 31.4447 28.8001C31.2648 28.7374 31.0721 28.7207 30.8841 28.7513C30.6961 28.7819 30.5186 28.859 30.3679 28.9755C30.2172 29.0919 30.0979 29.2442 30.0208 29.4184C29.9438 29.5927 29.9114 29.7834 29.9267 29.9732C29.9599 30.3247 29.9001 30.6788 29.7532 30.9998C29.6404 31.2407 29.4815 31.4571 29.2855 31.6368C29.0556 31.4292 28.8777 31.1705 28.7661 30.8815C28.6545 30.5926 28.6122 30.2815 28.6428 29.9732C28.6581 29.7834 28.6257 29.5927 28.5486 29.4184C28.4716 29.2442 28.3523 29.0919 28.2016 28.9755C28.0508 28.859 27.8734 28.7819 27.6854 28.7513C27.4974 28.7207 27.3047 28.7374 27.1248 28.8001C26.771 28.9289 26.3893 28.9614 26.0189 28.8941C25.6485 28.8268 25.3026 28.6621 25.0167 28.4171C25.2072 27.6709 25.2734 26.8985 25.2126 26.1308C25.0049 23.7898 23.4227 21.4908 21.2755 20.41C20.233 19.8851 19.1709 19.7065 18.112 19.6755C20.717 18.3898 23.5603 17.7755 26.2084 17.9629C28.3448 18.1142 30.4749 18.7876 32.7202 20.0215C32.8803 20.1095 33.0687 20.1302 33.244 20.0793C33.4193 20.0283 33.5672 19.9098 33.6552 19.7497C33.7431 19.5897 33.7639 19.4013 33.7129 19.226C33.6619 19.0506 33.5434 18.9027 33.3834 18.8148C32.3952 18.2659 31.3627 17.8012 30.2966 17.4255C30.1444 16.5441 29.8164 15.7024 29.3321 14.9504C28.8479 14.1984 28.2172 13.5516 27.4777 13.0484C25.9428 12.0285 24.2481 11.9543 22.6093 11.8824C21.322 11.8259 19.9923 11.7663 18.7293 11.2436L15.9226 8.61661C16.1071 8.28262 16.2215 7.91455 16.259 7.53486C16.2965 7.15516 16.2562 6.77181 16.1406 6.4082C16.025 6.04459 15.8366 5.70836 15.5867 5.42001C15.3368 5.13167 15.0308 4.89727 14.6874 4.73112C14.3439 4.56497 13.9702 4.47056 13.589 4.45365C13.2079 4.43674 12.8272 4.49768 12.4704 4.63275C12.1136 4.76783 11.788 4.97421 11.5136 5.23929C11.2392 5.50437 11.0217 5.82259 10.8743 6.17453C10.52 6.31724 10.1985 6.53075 9.92947 6.802C9.66048 7.07325 9.44967 7.39653 9.30992 7.75206C9.17017 8.10759 9.10444 8.48789 9.11674 8.86971C9.12904 9.25152 9.21911 9.6268 9.38145 9.9726C9.54379 10.3184 9.77497 10.6274 10.0609 10.8808C10.3468 11.1342 10.6813 11.3266 11.0441 11.4462C11.4069 11.5658 11.7903 11.6101 12.1709 11.5764C12.5514 11.5428 12.921 11.4318 13.2572 11.2504L14.8774 12.8926C15.4937 13.616 15.7839 14.6707 16.0642 15.6913C16.1183 15.8886 16.1718 16.0833 16.2267 16.2727L16.26 16.3875C16.48 17.1469 16.7068 17.9267 16.989 18.6975C16.3566 19.0366 15.7432 19.4098 15.1513 19.8156C13.8738 19.9048 12.5649 19.9424 11.2605 19.5745L7.70522 16.9699C7.87232 16.5823 7.95779 16.1645 7.95629 15.7424C7.95479 15.3203 7.86636 14.9031 7.69652 14.5167C7.52667 14.1303 7.27904 13.783 6.96908 13.4965C6.65911 13.21 6.29345 12.9905 5.8949 12.8515C5.49634 12.7126 5.07344 12.6572 4.65254 12.6889C4.23165 12.7206 3.8218 12.8386 3.44854 13.0357C3.07528 13.2327 2.74661 13.5046 2.48303 13.8342C2.21945 14.1639 2.0266 14.5443 1.91651 14.9518C1.54396 15.1509 1.21644 15.4246 0.954418 15.7559C0.692395 16.0873 0.501492 16.469 0.393627 16.8775C0.285763 17.2859 0.263255 17.7121 0.327507 18.1296C0.39176 18.5471 0.541393 18.9469 0.767065 19.304C0.992736 19.661 1.2896 19.9678 1.63912 20.205C1.98864 20.4422 2.38331 20.6048 2.79848 20.6826C3.21366 20.7605 3.64043 20.7519 4.05214 20.6574C4.46385 20.5629 4.85166 20.3846 5.19137 20.1335L7.27828 21.7939C8.07783 22.5315 8.54755 23.6787 9.00149 24.7893C9.08869 25.0026 9.17471 25.2131 9.26182 25.4178L9.32085 25.5564C9.37489 25.6835 9.42938 25.8113 9.48434 25.94C9.00272 26.8028 8.60463 27.7098 8.29548 28.6483C6.83839 33.1008 7.29709 35.9636 8.19891 37.7506H0.984224C0.868334 37.7506 0.754318 37.7799 0.652742 37.8357C0.551166 37.8915 0.465317 37.972 0.40315 38.0698C0.340984 38.1676 0.304512 38.2795 0.297114 38.3952C0.289716 38.5108 0.311632 38.6265 0.360831 38.7314L2.37173 43.0212C2.65062 43.6125 3.09154 44.1125 3.64327 44.4633C4.19501 44.814 4.83492 45.001 5.4887 45.0026H42.1028C42.7566 45.001 43.3965 44.814 43.9482 44.4633C44.4999 44.1126 44.9408 43.6125 45.2198 43.0213L47.2307 38.7314C47.2799 38.6265 47.3018 38.5108 47.2944 38.3952C47.287 38.2795 47.2505 38.1676 47.1883 38.0698ZM31.0021 31.5795C31.2033 31.1459 31.3088 30.6741 31.3115 30.1961C31.8969 30.3448 32.5107 30.3398 33.0935 30.1815C33.8419 29.9747 34.5026 29.5296 34.9753 28.9136C35.5461 29.3096 36.2284 29.5129 36.9229 29.4942C37.0559 29.4902 37.1885 29.4778 37.3199 29.4572C37.3055 29.5895 37.2995 29.7225 37.3017 29.8556C37.3165 30.55 37.5518 31.2216 37.9737 31.7734C37.3808 32.2747 36.9674 32.9557 36.7963 33.7131C36.6658 34.3028 36.6898 34.9162 36.8661 35.4939C36.3887 35.5191 35.9224 35.6467 35.4987 35.8683C34.7382 36.272 34.1535 36.9423 33.8568 37.7506H32.4917C32.6113 37.0845 32.5225 36.3976 32.2373 35.7838L34.9504 32.9392C35.0128 32.8738 35.0617 32.7967 35.0944 32.7124C35.127 32.628 35.1427 32.5381 35.1405 32.4477C35.1384 32.3573 35.1185 32.2682 35.0819 32.1856C35.0453 32.1029 34.9928 32.0282 34.9274 31.9658C34.862 31.9034 34.7849 31.8545 34.7006 31.8219C34.6162 31.7893 34.5263 31.7736 34.4359 31.7757C34.3455 31.7778 34.2564 31.7978 34.1738 31.8343C34.0911 31.8709 34.0164 31.9234 33.954 31.9888L31.3974 34.6693C31.0284 34.3481 30.5926 34.1131 30.1215 33.9811C29.6505 33.8492 29.156 33.8237 28.6738 33.9065C28.6455 33.7781 28.6169 33.6467 28.5891 33.5135C29.1112 33.3942 29.5996 33.1582 30.0175 32.8233C30.4354 32.4883 30.772 32.0631 31.0022 31.5795H31.0021ZM29.2297 35.2358C29.5335 35.2357 29.8331 35.3072 30.1042 35.4444C30.3753 35.5815 30.6103 35.7806 30.7903 36.0254C30.9702 36.2703 31.09 36.554 31.14 36.8537C31.19 37.1534 31.1687 37.4607 31.078 37.7506H27.3815C27.2907 37.4607 27.2694 37.1534 27.3193 36.8537C27.3692 36.554 27.489 36.2702 27.669 36.0254C27.8489 35.7805 28.0839 35.5815 28.3551 35.4443C28.6262 35.3072 28.9258 35.2358 29.2297 35.2359V35.2358ZM25.4759 30.1814C26.0587 30.3398 26.6726 30.3448 27.258 30.1961C27.2606 30.6741 27.3661 31.1459 27.5673 31.5795C27.6742 31.8095 27.8066 32.0267 27.9622 32.227C27.9189 32.2318 27.8755 32.2362 27.8315 32.2388C27.722 32.245 27.615 32.2744 27.5178 32.3251C27.4205 32.3758 27.3351 32.4466 27.2672 32.5328C27.1994 32.619 27.1506 32.7186 27.1242 32.8251C27.0978 32.9315 27.0943 33.0424 27.1139 33.1503C27.1935 33.5843 27.2889 34.0277 27.379 34.4251C27.2903 34.4851 27.2047 34.5491 27.1224 34.6171L24.6155 31.9888C24.5532 31.9229 24.4785 31.8699 24.3957 31.8328C24.3129 31.7958 24.2236 31.7756 24.1329 31.7732C24.0422 31.7708 23.9519 31.7864 23.8673 31.819C23.7827 31.8516 23.7053 31.9006 23.6396 31.9632C23.574 32.0258 23.5214 32.1008 23.4848 32.1838C23.4482 32.2668 23.4284 32.3563 23.4265 32.447C23.4246 32.5377 23.4406 32.6278 23.4737 32.7123C23.5068 32.7968 23.5562 32.8739 23.6191 32.9392L26.2588 35.7069C25.9449 36.3392 25.8429 37.0558 25.9679 37.7506H24.7128C24.4161 36.9423 23.8314 36.272 23.0708 35.8683C22.6474 35.6475 22.1815 35.5202 21.7046 35.4948C21.8824 34.917 21.9061 34.3028 21.7733 33.7131C21.6021 32.9557 21.1887 32.2747 20.5958 31.7734C21.0177 31.2216 21.253 30.5499 21.2677 29.8555C21.27 29.7225 21.2639 29.5894 21.2496 29.4572C21.381 29.4778 21.5137 29.4901 21.6467 29.4942C22.3412 29.514 23.0238 29.3106 23.5942 28.9137C24.0669 29.5296 24.7275 29.9747 25.4759 30.1814ZM15.6064 11.6708L14.0697 10.1134C13.8941 9.93655 13.6627 9.82606 13.4148 9.80069C13.1669 9.77532 12.9179 9.83663 12.7101 9.97419C12.4307 10.1589 12.0953 10.2397 11.7625 10.2023C11.4297 10.1649 11.1205 10.0118 10.8891 9.76967C10.6379 9.50261 10.4976 9.15007 10.4966 8.78344C10.4956 8.41682 10.634 8.06353 10.8838 7.79512C11.042 7.62732 11.2388 7.50071 11.4571 7.42628C11.6095 7.37448 11.7481 7.28887 11.8626 7.17586C11.9771 7.06286 12.0645 6.9254 12.1184 6.77379C12.1957 6.55661 12.3249 6.36161 12.4947 6.20575C12.7665 5.95967 13.1216 5.82607 13.4882 5.83201C13.8547 5.83794 14.2053 5.98295 14.469 6.23769C14.7079 6.47242 14.8568 6.78358 14.8897 7.11688C14.9226 7.45018 14.8373 7.78444 14.6489 8.06133C14.5086 8.26725 14.4439 8.51544 14.466 8.76366C14.488 9.01188 14.5954 9.24479 14.7698 9.42277C14.7762 9.42938 14.7827 9.43571 14.7894 9.44186L16.8986 11.416L15.6064 11.6708ZM16.5252 12.8931L18.2769 12.5477C19.7352 13.1348 21.1646 13.1975 22.5489 13.258C24.0665 13.3245 25.4998 13.3874 26.7156 14.1952C27.6717 14.8308 28.4172 15.8602 28.7727 16.9766C27.9626 16.7789 27.1374 16.6493 26.3057 16.5893C23.6221 16.3992 20.8463 16.925 18.2325 18.0895C17.9874 17.4025 17.7825 16.6946 17.5826 16.0044L17.5492 15.8893C17.4961 15.7059 17.4444 15.5176 17.392 15.3268C17.1749 14.5359 16.9374 13.6708 16.5252 12.8931ZM5.88966 18.9295C5.68525 18.7682 5.43128 18.6827 5.17092 18.6874C4.91056 18.6922 4.65988 18.7869 4.46149 18.9556C4.15899 19.2126 3.77584 19.3552 3.37893 19.3584C2.98202 19.3617 2.59657 19.2255 2.28985 18.9736C1.95642 18.695 1.7413 18.3002 1.68808 17.8689C1.63485 17.4377 1.74748 17.0024 2.00317 16.6511C2.16545 16.4313 2.37897 16.2544 2.62518 16.1358C2.77677 16.063 2.90989 15.9569 3.01456 15.8253C3.11923 15.6937 3.19271 15.5401 3.22948 15.3761C3.28972 15.1096 3.41409 14.8619 3.5918 14.6544C3.87662 14.3262 4.27549 14.1186 4.70766 14.0735C5.13983 14.0284 5.57298 14.1492 5.91941 14.4115C6.23383 14.6537 6.45319 14.9987 6.5392 15.3862C6.62522 15.7737 6.57243 16.1791 6.39005 16.5317C6.27013 16.7629 6.23405 17.0285 6.28795 17.2833C6.34184 17.5381 6.48238 17.7664 6.68563 17.9292C6.69279 17.9349 6.69995 17.9405 6.7073 17.9457L9.46442 19.9656L7.85191 20.4907L5.88966 18.9295ZM8.92263 21.5902L10.9684 20.924C12.6715 21.3871 14.277 21.2646 15.8315 21.1458C17.5477 21.0148 19.1684 20.8908 20.6564 21.6399C22.3941 22.5146 23.6738 24.3682 23.8411 26.2524C23.8732 26.654 23.8611 27.0579 23.805 27.4568C23.6534 27.4354 23.4991 27.4446 23.3512 27.4838C23.2032 27.523 23.0646 27.5915 22.9435 27.6851C22.5886 27.972 22.1443 28.1251 21.6881 28.1178C21.3462 28.106 21.0136 28.0033 20.7246 27.8202C20.5787 27.7301 20.4071 27.691 20.2366 27.7088C20.0661 27.7267 19.9063 27.8006 19.7823 27.919C19.6582 28.0373 19.5769 28.1934 19.5511 28.3629C19.5252 28.5324 19.5563 28.7057 19.6394 28.8556C19.8085 29.1529 19.8953 29.49 19.8909 29.832C19.8762 30.2879 19.7022 30.7243 19.3993 31.0654C19.2428 31.249 19.1483 31.4774 19.1294 31.718C17.7215 31.9413 16.2665 31.7697 15.1164 31.2251C12.7522 30.1052 11.6025 27.4023 10.5879 25.0175L10.5288 24.8785C10.4443 24.6799 10.3607 24.4754 10.2761 24.2683C9.91532 23.3859 9.5194 22.4174 8.92263 21.5902ZM43.973 42.4369C43.8056 42.7916 43.5411 43.0917 43.21 43.3021C42.879 43.5125 42.495 43.6247 42.1028 43.6256H5.4887C5.09643 43.6247 4.71248 43.5125 4.38143 43.3021C4.05039 43.0916 3.78585 42.7916 3.61852 42.4368L2.06743 39.1276H11.3316C11.5142 39.1276 11.6893 39.0551 11.8184 38.9259C11.9475 38.7968 12.02 38.6217 12.02 38.4391C12.02 38.2565 11.9475 38.0814 11.8184 37.9523C11.6893 37.8232 11.5142 37.7506 11.3316 37.7506H9.79562C8.81523 36.3362 8.08315 33.7239 9.60395 29.0766C9.77459 28.5578 9.97576 28.0495 10.2064 27.5545C11.1616 29.549 12.4011 31.4626 14.5269 32.4695C15.5315 32.9454 16.72 33.189 17.9341 33.189C18.5844 33.1888 19.2328 33.1186 19.868 32.9796C20.1467 33.2657 20.3409 33.6232 20.4291 34.0127C20.491 34.3121 20.4912 34.621 20.4297 34.9205C20.3682 35.22 20.2462 35.5038 20.0713 35.7545C19.9833 35.8848 19.9371 36.0387 19.9386 36.1958C19.9401 36.353 19.9894 36.506 20.0798 36.6345C20.1702 36.763 20.2976 36.8611 20.445 36.9156C20.5924 36.9701 20.7528 36.9785 20.9052 36.9398C21.4154 36.802 21.9583 36.8548 22.4324 37.0883C22.7292 37.2453 22.9831 37.4728 23.1716 37.7506H14.0855C13.9029 37.7506 13.7278 37.8232 13.5986 37.9523C13.4695 38.0814 13.397 38.2565 13.397 38.4391C13.397 38.6217 13.4695 38.7968 13.5986 38.9259C13.7278 39.0551 13.9029 39.1276 14.0855 39.1276H24.1944C24.1958 39.1276 24.1972 39.128 24.1985 39.128C24.2008 39.128 24.2031 39.1276 24.2053 39.1276H26.9262C26.9276 39.1276 26.929 39.1279 26.9302 39.1279L26.9346 39.1276H34.3639C34.3662 39.1276 34.3685 39.128 34.3707 39.128C34.3721 39.128 34.3735 39.1276 34.3749 39.1276H45.5241L43.973 42.4369ZM31.9935 7.56416C32.2742 8.09942 32.5394 8.60513 32.6719 9.16895C33.0075 10.597 32.445 12.222 31.9175 13.4781C31.8548 13.6273 31.8467 13.7938 31.8946 13.9484C31.9425 14.103 32.0433 14.2358 32.1794 14.3235C32.3154 14.4111 32.478 14.448 32.6386 14.4277C32.7992 14.4074 32.9474 14.3312 33.0574 14.2125C33.4711 13.7657 33.9161 13.3296 34.3463 12.9077C34.9485 12.3174 35.5713 11.7069 36.1477 11.0326C36.6228 10.4768 37.6915 8.98545 37.3517 7.14813C37.2141 6.40412 36.8755 5.7833 36.5769 5.23564C36.5273 5.14476 36.4779 5.05434 36.4296 4.96346C35.9501 4.06293 35.8184 3.30432 36.015 2.57601C36.1288 2.15429 36.3964 1.46021 36.5371 1.25743C36.6782 1.1626 36.7792 1.01896 36.8207 0.854134C36.8622 0.689312 36.8413 0.514965 36.7619 0.364645C36.6826 0.214325 36.5505 0.0986545 36.391 0.0398944C36.2315 -0.0188657 36.056 -0.0165633 35.8981 0.0463586L35.8968 0.0469095C34.6032 0.562624 32.1975 1.52236 31.3862 3.44771C30.9926 4.38119 31.0232 5.40849 31.477 6.50087C31.6337 6.87816 31.8167 7.22699 31.9935 7.56406V7.56416ZM32.655 3.98243C33.0008 3.16185 33.8554 2.54002 34.7257 2.07718C34.7117 2.12366 34.6984 2.17033 34.6856 2.21717C34.3963 3.28899 34.5691 4.399 35.2142 5.61053C35.2647 5.70545 35.3162 5.8001 35.3679 5.89492C35.6416 6.39668 35.9001 6.87054 35.9977 7.39855C36.058 7.72453 36.1715 8.88566 35.101 10.1379C34.7632 10.5331 34.4108 10.9023 34.0446 11.2701C34.1961 10.4707 34.1852 9.64903 34.0124 8.85399C33.84 8.12026 33.5212 7.51238 33.2128 6.92461C33.0425 6.59983 32.8817 6.29323 32.7486 5.97267C32.4372 5.22288 32.4066 4.57185 32.655 3.98243Z" />
    </svg>
  );
}
