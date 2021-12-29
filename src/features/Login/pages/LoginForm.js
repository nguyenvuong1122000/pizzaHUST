import React,{useState} from "react";
import { Routes, Route, Link } from "react-router-dom";
import img from "./foodImage.png"
import styles from "./LoginForm.module.css";


function LoginForm(props){

    const [details,setDetails] = useState({userName: "",password: ""});

    // Xử lý khi submid

    const submitHandle = s => {
        s.preventDefault();
        props.Login(details); // in ra console, Login(doi so truyen vao ben tren)
    }

   

    return (
        <div className={styles.loginPage}>
            <div className={styles.leftSide}> 
                <div className={styles.logo}>
                    <Link to="/home">
                        <svg width="78" height="47" viewBox="0 0 78 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.9157 43.4067C9.93819 46.1684 5.61413 45.0125 5.26224 41.6279L1.84943 8.80908C1.58111 6.22883 3.96625 4.17787 6.45994 4.84457L29.0482 10.8836C31.5417 11.5505 32.5986 14.5216 31.091 16.6271L11.9157 43.4067Z" fill="#F2A800" fill-opacity="0.21"/>
                            <path d="M50.4912 18.9397C48.314 19.2064 46.7724 19.4397 45.8661 19.6397L44.971 23.2065C44.8936 23.5287 44.7776 23.7454 44.6229 23.8565C44.4792 23.9676 44.1863 24.0232 43.7443 24.0232C43.4017 24.0232 43.1475 23.962 42.9817 23.8398C42.827 23.7287 42.7496 23.5343 42.7496 23.2565C42.7496 23.1342 42.7662 23.0176 42.7994 22.9065L45.0704 13.8895C45.192 13.4006 45.3191 13.0784 45.4517 12.9229C45.5954 12.7562 45.8496 12.6729 46.2143 12.6729C46.5126 12.6729 46.7834 12.7062 47.0265 12.7729C47.2807 12.8395 47.4133 12.9395 47.4244 13.0729C47.4244 13.0951 47.3526 13.3951 47.2089 13.9729C46.9879 14.8285 46.6729 16.1285 46.264 17.873C47.8996 17.5397 49.4523 17.3119 50.9222 17.1896L51.6847 14.0896C51.7952 13.6451 51.9444 13.3173 52.1323 13.1062C52.3312 12.884 52.5965 12.7395 52.928 12.6729C53.3369 12.7506 53.6021 12.8173 53.7237 12.8729C53.8563 12.9173 53.9447 12.9895 53.9889 13.0895C53.8453 13.5007 53.7348 13.884 53.6574 14.2396C53.5911 14.584 53.5524 14.7896 53.5414 14.8562C53.3977 15.634 53.2264 16.4285 53.0275 17.2396C53.4585 17.4285 53.674 17.6841 53.674 18.0063C53.674 18.3286 53.3314 18.6008 52.6462 18.823C52.5246 19.2675 52.2981 20.2342 51.9665 21.7231C51.8892 22.1342 51.7787 22.6453 51.635 23.2565C51.4803 23.8676 51.2371 24.1732 50.9056 24.1732C49.8889 24.1732 49.3805 23.9343 49.3805 23.4565C49.3805 23.3565 49.7507 21.8509 50.4912 18.9397ZM61.1339 23.7565C61.0897 23.9454 60.9902 24.0732 60.8355 24.1398C60.6808 24.2176 60.4763 24.2565 60.2221 24.2565C59.4596 24.2565 59.0783 24.0843 59.0783 23.7398L59.1778 23.1065C58.8683 23.3398 58.5036 23.5731 58.0837 23.8065C57.6637 24.0398 57.3156 24.1565 57.0393 24.1565C55.4037 24.1565 54.5859 23.6176 54.5859 22.5398C54.5859 20.7064 55.1329 18.7175 56.227 16.573C56.3597 16.3174 56.4978 16.1341 56.6415 16.0229C56.7962 15.9118 57.0559 15.8563 57.4206 15.8563C57.8074 15.8563 58.0947 15.9118 58.2826 16.0229C58.4815 16.1229 58.581 16.2452 58.581 16.3896C58.581 16.423 58.5202 16.523 58.3987 16.6896C58.2771 16.8341 58.1721 16.9785 58.0837 17.123C57.0449 18.8675 56.5254 20.5675 56.5254 22.2231C56.5254 22.3676 56.5807 22.4953 56.6912 22.6065C56.8017 22.7176 56.9012 22.7731 56.9896 22.7731C57.2327 22.7731 57.6416 22.6565 58.2163 22.4231C58.802 22.1898 59.2496 21.9509 59.5591 21.7064L59.8906 20.3564C60.2884 18.7452 60.5371 17.7563 60.6366 17.3896C60.7581 16.9452 60.9129 16.5841 61.1007 16.3063C61.2997 16.0174 61.6091 15.8729 62.029 15.8729C62.6148 15.8729 62.9076 16.0507 62.9076 16.4063C62.9076 16.4618 62.8911 16.5341 62.8579 16.623C62.8358 16.7007 62.8192 16.7674 62.8082 16.823L62.1451 19.523C61.6146 21.6675 61.2775 23.0787 61.1339 23.7565ZM68.8776 17.3563C68.745 17.2896 68.5792 17.2563 68.3803 17.2563C67.883 17.2563 67.3857 17.3563 66.8884 17.5563C66.3911 17.7563 66.1424 18.0119 66.1424 18.323C66.1424 18.5452 66.2419 18.723 66.4408 18.8564C66.6397 18.9897 66.9547 19.1397 67.3857 19.3064C67.8498 19.4953 68.2256 19.673 68.5129 19.8397C68.8003 20.0064 69.0489 20.2508 69.2589 20.5731C69.4799 20.8842 69.5904 21.2842 69.5904 21.7731C69.5904 22.5731 69.2589 23.1898 68.5958 23.6231C67.9438 24.0454 67.0652 24.2565 65.96 24.2565C65.4185 24.2565 64.9157 24.1732 64.4515 24.0065C63.9874 23.8398 63.6171 23.6287 63.3409 23.3731C63.0756 23.1065 62.9319 22.8453 62.9098 22.5898C62.9098 22.3231 63.0259 22.1064 63.258 21.9398C63.49 21.762 63.8161 21.6453 64.236 21.5898C64.2471 21.812 64.3631 22.0231 64.5841 22.2231C64.8052 22.412 65.0649 22.5676 65.3633 22.6898C65.6727 22.8009 65.9379 22.8565 66.159 22.8565C66.5347 22.8565 66.8773 22.7565 67.1868 22.5565C67.4962 22.3453 67.6509 22.1009 67.6509 21.8231C67.6509 21.312 67.1591 20.9064 66.1755 20.6064C65.5456 20.4175 65.0594 20.1175 64.7168 19.7064C64.3852 19.2953 64.2194 18.8619 64.2194 18.4063C64.2194 17.5063 64.6228 16.8619 65.4296 16.473C66.2474 16.0729 67.2862 15.8729 68.5461 15.8729C69.2534 15.8729 69.8004 15.9563 70.1872 16.1229C70.574 16.2896 70.7674 16.5785 70.7674 16.9896C70.7674 17.2674 70.6624 17.5119 70.4525 17.723C70.2535 17.9341 69.9662 18.0397 69.5904 18.0397C69.2589 18.0397 69.0434 18.0174 68.9439 17.973C68.8555 17.9174 68.8058 17.8285 68.7947 17.7063C68.7947 17.5952 68.8224 17.4785 68.8776 17.3563ZM73.4688 21.9398C73.4688 22.1953 73.513 22.3731 73.6014 22.4731C73.6898 22.5731 73.8556 22.6231 74.0987 22.6231C74.4192 22.6231 74.6844 22.5565 74.8944 22.4231C75.1154 22.2787 75.3807 22.0564 75.6901 21.7564C75.7785 21.6675 75.878 21.6231 75.9885 21.6231C76.1211 21.6231 76.2261 21.7231 76.3035 21.9231C76.3808 22.112 76.4195 22.3064 76.4195 22.5065C76.4195 22.7842 76.309 23.0565 76.0879 23.3231C75.8669 23.5898 75.5464 23.8065 75.1265 23.9732C74.7065 24.1398 74.2147 24.2232 73.6511 24.2232C72.8996 24.2232 72.3636 24.0509 72.0431 23.7065C71.7337 23.362 71.579 22.8342 71.579 22.1231C71.579 22.0231 71.6287 21.762 71.7282 21.3398C71.8276 20.9175 71.9547 20.412 72.1094 19.823L72.5736 17.923L71.5624 18.0063C71.4298 18.0063 71.3303 17.9563 71.264 17.8563C71.1977 17.7563 71.1645 17.6341 71.1645 17.4896C71.1645 17.2119 71.264 16.9341 71.4629 16.6563C71.485 16.623 71.5955 16.5896 71.7945 16.5563C71.9934 16.523 72.2365 16.4896 72.5239 16.4563L72.9714 16.4063L73.3527 14.6896C73.4632 14.4007 73.629 14.1784 73.85 14.0229C74.0821 13.8562 74.2976 13.7729 74.4965 13.7729C74.7176 13.7729 74.9054 13.8395 75.0602 13.9729C75.2149 14.1062 75.2978 14.2618 75.3088 14.4396L74.8944 16.2229C75.3254 16.1674 75.7232 16.1229 76.0879 16.0896C76.4637 16.0452 76.7566 16.0229 76.9665 16.0229C77.3865 16.0229 77.5965 16.2674 77.5965 16.7563C77.5965 16.9452 77.5136 17.1174 77.3478 17.273C77.1931 17.4174 77.0218 17.5063 76.8339 17.5397L74.5131 17.773L73.4688 21.9398Z" fill="#FF8000"/>
                            <path d="M6.25772 23.5288C6.25772 23.3041 6.32164 23.1274 6.44928 22.9991C6.59295 22.8547 6.78451 22.7263 7.02396 22.6139C7.10371 22.5658 7.39105 22.4213 7.88597 22.1806C8.39673 21.9398 8.88373 21.7552 9.3466 21.6268C9.49027 21.3059 9.70577 21.0411 9.99311 20.8324C10.2965 20.6237 10.6796 20.5194 11.1425 20.5194C11.4138 20.5194 11.6374 20.5755 11.8129 20.6879C11.9884 20.7842 12.1082 20.9126 12.1721 21.0731C12.7628 20.8805 13.473 20.7842 14.3032 20.7842C15.3407 20.7842 16.2348 21.0089 16.985 21.4583C17.7512 21.8917 18.3259 22.4935 18.709 23.2639C19.1082 24.0343 19.3076 24.901 19.3076 25.864C19.3076 26.0566 19.2837 26.3214 19.2358 26.6585C18.5814 30.4141 15.7877 32.292 10.8551 32.292C10.4081 32.292 10.081 32.284 9.87338 32.2679L9.5621 33.4235C9.22688 34.6592 9.05926 35.2933 9.05926 35.3254C8.93162 35.8871 8.73196 36.3204 8.46064 36.6254C8.20517 36.9304 7.78227 37.0828 7.19157 37.0828C6.69665 37.0828 6.32956 36.9945 6.09011 36.818C5.86669 36.6574 5.75488 36.3767 5.75488 35.9754C5.75488 35.7989 5.77883 35.6304 5.82672 35.4698L8.72404 24.2269C7.89389 24.4677 7.26341 24.7967 6.8324 25.214C6.65687 25.0214 6.5132 24.7727 6.40139 24.4677C6.30561 24.1467 6.25772 23.8338 6.25772 23.5288ZM10.3762 30.0289C10.5678 30.045 10.8391 30.053 11.1903 30.053C12.7068 30.053 13.904 29.7641 14.7821 29.1863C15.6759 28.6085 16.2506 27.7178 16.5061 26.514C16.554 26.2412 16.5779 26.0405 16.5779 25.9121C16.5779 25.0134 16.3306 24.3473 15.8356 23.9139C15.3407 23.4645 14.6463 23.2399 13.7524 23.2399C13.2735 23.2399 12.6589 23.3523 11.9087 23.5769C11.2861 26.0646 10.7754 28.2154 10.3762 30.0289ZM22.8376 22.4695C22.8376 21.9719 22.9892 21.5305 23.2926 21.1454C23.6118 20.7602 24.0509 20.5676 24.6096 20.5676C25.2003 20.5676 25.711 20.7522 26.142 21.1213C26.5891 21.4904 26.8125 21.9078 26.8125 22.3732C26.8125 22.8385 26.5891 23.2399 26.142 23.5769C25.695 23.9139 25.1763 24.0825 24.5856 24.0825C24.0109 24.0825 23.572 23.938 23.2686 23.6491C22.9813 23.3441 22.8376 22.951 22.8376 22.4695ZM25.3518 26.7307C24.5059 30.1974 23.8593 32.8055 23.4123 34.555C23.3484 34.8118 23.3165 35.0926 23.3165 35.3976L23.3405 36.0717C23.3405 36.3445 23.2526 36.5371 23.0771 36.6495C22.9174 36.7619 22.5663 36.826 22.0235 36.8421C21.4967 36.8421 21.0976 36.786 20.8263 36.6736C20.555 36.5611 20.4192 36.3204 20.4192 35.9513C20.4192 35.7748 20.6187 34.8359 21.0178 33.1346C21.4328 31.4332 21.9917 29.2184 22.694 26.4899L22.1432 25.7677C22.0954 25.7196 22.0714 25.6634 22.0714 25.5992C22.0714 25.4386 22.2469 25.3103 22.5982 25.214C22.9494 25.1016 23.4363 25.0455 24.0588 25.0455C24.6016 25.0455 24.9448 25.206 25.0885 25.527C25.2481 25.832 25.3358 26.2331 25.3518 26.7307ZM34.8189 36.6254C30.7322 37.0908 28.4017 37.3638 27.827 37.4439C27.2363 37.5082 26.9329 37.5402 26.9171 37.5402C26.6298 37.5402 26.3743 37.5001 26.1509 37.4199C25.9114 37.3397 25.7757 37.2352 25.7438 37.1069C25.7118 37.0267 25.648 36.8823 25.5522 36.6736C25.4565 36.4648 25.4086 36.2884 25.4086 36.1439C25.4086 35.9995 25.4484 35.887 25.5283 35.8069C25.6081 35.7106 25.7836 35.6383 26.0551 35.5902C26.3104 35.542 26.4861 35.518 26.5819 35.518C27.3481 34.7155 28.3617 33.6161 29.6229 32.2197C31.3787 30.2937 32.7117 28.8813 33.6216 27.9826L28.8566 28.44C28.3617 28.44 28.1143 28.1913 28.1143 27.6937C28.1143 27.2924 28.258 26.8913 28.5453 26.4899C28.6251 26.3775 29.2556 26.2492 30.437 26.1047C31.6182 25.9603 32.9033 25.832 34.2921 25.7196C35.6967 25.5912 36.5908 25.527 36.9739 25.527C37.5804 25.527 37.8838 25.8801 37.8838 26.5862C37.8838 26.795 37.812 26.9955 37.6683 27.1881C37.5246 27.3646 37.3489 27.5011 37.1415 27.5974L36.6147 28.0548C35.7367 28.9535 34.6592 30.1012 33.3822 31.4975L30.1736 34.9161C32.6957 34.5952 34.3079 34.4346 35.0104 34.4346C35.617 34.4346 35.9203 34.7878 35.9203 35.4939C35.9203 35.7667 35.8006 36.0156 35.5612 36.2402C35.3376 36.4489 35.0902 36.5773 34.8189 36.6254ZM37.5631 35.9032C38.7762 34.4266 41.3064 31.7864 45.1536 27.9826L40.221 28.44C39.7261 28.44 39.4787 28.1913 39.4787 27.6937C39.4787 27.2924 39.6224 26.8913 39.9097 26.4899C39.9895 26.3775 40.62 26.2492 41.8014 26.1047C42.9826 25.9603 44.2677 25.832 45.6565 25.7196C47.0611 25.5912 47.9552 25.527 48.3383 25.527C48.9448 25.527 49.2482 25.8801 49.2482 26.5862C49.2482 26.7788 49.0566 27.0838 48.6735 27.5011C48.2904 27.9183 47.987 28.1831 47.7636 28.2955C47.0453 28.9535 46.3988 29.5876 45.8241 30.1975C45.2494 30.7914 44.515 31.5777 43.6212 32.5568C42.4876 33.8087 41.7295 34.6352 41.3464 35.0365L42.9986 34.8198C45.0418 34.5629 46.1672 34.4346 46.3748 34.4346C46.9813 34.4346 47.2847 34.7878 47.2847 35.4939C47.2847 35.7667 47.165 36.0156 46.9255 36.2402C46.7019 36.4489 46.4546 36.5773 46.1833 36.6254C42.0966 37.0908 39.7661 37.3638 39.1914 37.4439C38.6007 37.5082 38.2973 37.5402 38.2815 37.5402C38.042 37.5402 37.8584 37.3397 37.7307 36.9384C37.6189 36.5532 37.5631 36.2082 37.5631 35.9032ZM58.9604 36.3606C58.8486 36.6495 58.5852 36.8421 58.1702 36.9384C57.7711 37.0508 57.42 37.1069 57.1166 37.1069C56.8293 37.1069 56.6377 37.0347 56.542 36.8902C56.4622 36.7619 56.3904 36.5611 56.3264 36.2884C56.2625 36.0156 56.2227 35.8309 56.2067 35.7346C55.5202 36.2 54.8179 36.5532 54.0996 36.7939C53.3973 37.0508 52.8066 37.1791 52.3277 37.1791C51.9127 37.1791 51.4417 37.0426 50.9149 36.7699C50.4042 36.4971 49.9651 36.1278 49.598 35.6624C49.2309 35.197 49.0472 34.6833 49.0472 34.1216C49.0472 33.2229 49.3425 32.0753 49.9332 30.6789C50.5239 29.2826 51.3538 28.0628 52.4234 27.0196C53.5089 25.9764 54.77 25.4547 56.2067 25.4547C57.4679 25.4547 58.5933 25.6553 59.5829 26.0566C60.5726 26.4579 61.0675 27.0276 61.0675 27.7659C60.6205 28.6006 60.1337 29.8524 59.6069 31.5216C59.0961 33.1907 58.8406 34.4266 58.8406 35.2291C58.8406 35.7587 58.8806 36.1359 58.9604 36.3606ZM56.2546 33.7124C56.3823 33.0062 56.5978 32.1716 56.9011 31.2086C57.2203 30.2295 57.6434 29.2506 58.1702 28.2715C58.0904 27.9505 57.835 27.7418 57.404 27.6455C56.989 27.5331 56.6138 27.477 56.2786 27.477C55.6879 27.477 55.0494 27.8783 54.363 28.6807C53.6765 29.4832 53.086 30.4221 52.5911 31.4975C52.1122 32.5568 51.8727 33.4155 51.8727 34.0735C51.8727 34.3944 51.9606 34.6272 52.1361 34.7717C52.3116 34.9 52.5353 34.9642 52.8066 34.9642C53.1737 34.9642 53.7564 34.8278 54.5545 34.555C55.3687 34.2661 55.9354 33.9851 56.2546 33.7124Z" fill="#FF8000"/>
                            <path d="M26.9792 22.2325C26.9792 23.3064 25.6198 24.1769 24.5847 24.1769C23.5496 24.1769 22.7428 23.4453 22.7428 22.3713C22.7428 21.2974 23.7185 20.288 24.7536 20.288C25.7888 20.288 26.9792 21.1585 26.9792 22.2325Z" fill="#F2A800"/>
                            <path d="M8.37602 13.6213C9.9019 13.6213 11.1389 12.3776 11.1389 10.8434C11.1389 9.30924 9.9019 8.06555 8.37602 8.06555C6.85013 8.06555 5.61316 9.30924 5.61316 10.8434C5.61316 12.3776 6.85013 13.6213 8.37602 13.6213Z" fill="#FF8000"/>
                            <path d="M13.8095 18.0656C14.5725 18.0656 15.191 17.4437 15.191 16.6766C15.191 15.9096 14.5725 15.2877 13.8095 15.2877C13.0466 15.2877 12.4281 15.9096 12.4281 16.6766C12.4281 17.4437 13.0466 18.0656 13.8095 18.0656Z" fill="#FF8000"/>
                            <path d="M17.125 15.2877C17.8879 15.2877 18.5064 14.6659 18.5064 13.8988C18.5064 13.1317 17.8879 12.5099 17.125 12.5099C16.362 12.5099 15.7435 13.1317 15.7435 13.8988C15.7435 14.6659 16.362 15.2877 17.125 15.2877Z" fill="white"/>
                            <path d="M13.5332 27.6955C14.1436 27.6955 14.6384 27.1981 14.6384 26.5844C14.6384 25.9707 14.1436 25.4733 13.5332 25.4733C12.9229 25.4733 12.4281 25.9707 12.4281 26.5844C12.4281 27.1981 12.9229 27.6955 13.5332 27.6955Z" fill="white"/>
                            <path d="M6.53411 19.3619C7.04274 19.3619 7.45506 18.9474 7.45506 18.436C7.45506 17.9246 7.04274 17.51 6.53411 17.51C6.02548 17.51 5.61316 17.9246 5.61316 18.436C5.61316 18.9474 6.02548 19.3619 6.53411 19.3619Z" fill="white"/>
                            <path d="M12.6124 37.5106C13.7314 37.5106 14.6385 36.5986 14.6385 35.4735C14.6385 34.3484 13.7314 33.4364 12.6124 33.4364C11.4934 33.4364 10.5863 34.3484 10.5863 35.4735C10.5863 36.5986 11.4934 37.5106 12.6124 37.5106Z" fill="white"/>
                            <path d="M23.5716 17.1398C25.1484 17.1398 26.4266 15.8547 26.4266 14.2694C26.4266 12.6841 25.1484 11.3989 23.5716 11.3989C21.9949 11.3989 20.7167 12.6841 20.7167 14.2694C20.7167 15.8547 21.9949 17.1398 23.5716 17.1398Z" fill="#FF8000"/>
                            <path d="M9.38897 41.9551C10.3554 41.9551 11.1388 41.1675 11.1388 40.1958C11.1388 39.2242 10.3554 38.4365 9.38897 38.4365C8.42258 38.4365 7.63916 39.2242 7.63916 40.1958C7.63916 41.1675 8.42258 41.9551 9.38897 41.9551Z" fill="#FF8000"/>
                            <path d="M7.71342 0.695047C7.22532 0.551525 6.71382 0.833089 6.57107 1.32392C6.42832 1.81475 6.70829 2.329 7.19658 2.47252L7.71342 0.695047ZM30.5562 8.37513L30.2978 9.26386L30.5562 8.37513ZM33.9227 18.0387L33.1691 17.5063L33.9227 18.0387ZM7.19658 2.47252L30.2978 9.26386L30.8148 7.4864L7.71342 0.695047L7.19658 2.47252ZM33.1691 17.5063L31.0147 20.589L32.5217 21.6536L34.6762 18.5711L33.1691 17.5063ZM30.2978 9.26386C33.8108 10.2967 35.2735 14.4955 33.1691 17.5063L34.6762 18.5711C37.5061 14.522 35.5391 8.87533 30.8148 7.4864L30.2978 9.26386Z" fill="#FF8000"/>
                            <path d="M29.3218 18.9611L30.1162 19.4292L29.3218 18.9611ZM29.4658 18.714L28.6996 18.2003L28.6849 18.2225L28.6712 18.2457L29.4658 18.714ZM31.1565 16.1641L31.9228 16.6778L31.1565 16.1641ZM29.2772 11.101L29.033 11.9938L29.2772 11.101ZM6.65069 4.8434L6.89492 3.95062L6.65069 4.8434ZM2.00273 8.72449L1.085 8.80208L2.00273 8.72449ZM4.77345 41.8944L3.85572 41.972L4.77345 41.8944ZM11.2654 43.9662L10.5601 43.3708L11.2654 43.9662ZM16.3568 39.3099C16.6839 38.9183 16.6333 38.3342 16.2437 38.0055C15.8543 37.6766 15.2734 37.7275 14.9463 38.119L16.3568 39.3099ZM30.1162 19.4292L30.2604 19.1822L28.6712 18.2457L28.5272 18.4927L30.1162 19.4292ZM30.2321 19.2275L31.9228 16.6778L30.3903 15.6506L28.6996 18.2003L30.2321 19.2275ZM29.5215 10.2082L6.89492 3.95062L6.40645 5.73619L29.033 11.9938L29.5215 10.2082ZM1.085 8.80208L3.85572 41.972L5.69124 41.817L2.92044 8.64708L1.085 8.80208ZM11.9707 44.5617L16.3568 39.3099L14.9463 38.119L10.5601 43.3708L11.9707 44.5617ZM3.85572 41.972C4.19962 46.0892 9.32827 47.7257 11.9707 44.5617L10.5601 43.3708C8.97462 45.2694 5.89753 44.2873 5.69124 41.817L3.85572 41.972ZM31.9228 16.6778C33.5247 14.262 32.3057 10.9784 29.5215 10.2082L29.033 11.9938C30.6067 12.4292 31.2956 14.2852 30.3903 15.6506L31.9228 16.6778ZM6.89492 3.95062C3.8073 3.09669 0.816999 5.59366 1.085 8.80208L2.92044 8.64708C2.75964 6.72203 4.55382 5.22384 6.40645 5.73619L6.89492 3.95062ZM31.2521 20.2422C30.6973 20.8952 29.6843 20.1702 30.1162 19.4292L28.5272 18.4927C26.9586 21.1833 30.6378 23.8164 32.6527 21.445L31.2521 20.2422Z" fill="#FF8000"/>
                            </svg>
                    </Link>

                </div>

                <form onSubmit={submitHandle}> 
                    <div className="form-inner">
                        <h2 className={styles.title}>Đăng nhập</h2>
                        
                        <div className={styles.content}>

                            <div className={styles.form}>
                                <label className={styles.form_title} htmlFor="userName">UserName</label>

                                <input type="text" 
                                name="userName" 
                                className={styles.input_content}
                                id="userName" 
                                onChange={e => setDetails({...details,userName: e.target.value})}
                                value={details.userName} />

                            </div>

                            <div className={styles.form}>
                                <label className={styles.form_title} htmlFor="password">Mật khẩu</label>
                                <input type="password"
                                 name="password"
                                  className={styles.input_content}
                                   id="password" 
                                   onChange={e => setDetails({...details,password: e.target.value})} 
                                   value={details.password}/>
                            </div>
                                    
                            {(props.error === "error") ? (<div className={styles.error}>Email hoặc mật khẩu không đúng, vui lòng nhập lại!</div>) : ""}
                        
                        </div>
                        
                            <div className={styles.forgetPass}>
                                <a href="">Quên mật khẩu</a>
                            </div>

                            <div className={styles.login_btn}>
                              <input className={styles.login_btn_input} type="submit" value="Đăng nhập" />    
                            </div>    

                            <p className={styles.login_route}>
                                Chưa có tài khoản? 
                                <a href="/Register"> Đăng ký </a>
                            </p>
                    </div>
                </form>
            </div>


            <div className={styles.rightSide}>
                <div className={styles.wrap}>
                        <img  src={img} className={styles.img} />
                </div>
            </div>

            
        </div>
    )
}

export default LoginForm;