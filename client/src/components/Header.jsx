import React, { useEffect, useState } from "react";
import { BsSearch, BsBell } from "react-icons/bs";
import { BiMessageSquare } from "react-icons/bi";
import { Link } from "react-router-dom";
import config from "../config";
import isAuthorize from "../utils/isAuthorize";
import getUser from "../utils/getUser";
import getCurrentUserId from "../utils/getCurrentUser";
import Logout from "../utils/logout";

const Header = () => {
  const [auth, SetAuth] = useState(false)
  const [user,SetUser] = useState('');
  const [avatar,SetAvatar]=useState('');
  useEffect(
    () => {
      
      var isAuth=isAuthorize();
      console.log(isAuth);
      SetAuth(isAuth);
      if(isAuth){
        (async()=>{
          console.log("hello");
          const getNameUser=await getUser(getCurrentUserId());
          SetUser(getNameUser.name);
          SetAvatar(getNameUser.avatar);
      })();
      }
    }, []
  )

  const logout=()=>{
    if(Logout()){
      alert("Đăng xuất thành công");
      window.location.reload(true);
    }
    else
      alert("Đăng xuất không thành công");
  }

  return (
    <header className="sticky top-0 z-50 opacity-80 flex bg-white justify-between items-center border-b-2">
      <div className="w-auto flex items-center">
        <a href={config.routes.home}>
          <svg
            width="194"
            height="78"
            viewBox="0 0 194 78"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_100_1049)">
              <path
                d="M86.8096 51.8536C86.8096 51.5664 86.7654 51.3087 86.6771 51.0804C86.5961 50.8447 86.4414 50.6311 86.2131 50.4396C85.9848 50.2408 85.6644 50.0456 85.252 49.8542C84.8396 49.6627 84.3057 49.4638 83.6502 49.2576C82.9211 49.022 82.2289 48.7568 81.5734 48.4622C80.9253 48.1677 80.3509 47.8252 79.8501 47.4349C79.3567 47.0372 78.9663 46.5769 78.6791 46.054C78.3993 45.5311 78.2593 44.9236 78.2593 44.2313C78.2593 43.5611 78.4066 42.9535 78.7012 42.4086C78.9958 41.8562 79.4082 41.3849 79.9385 40.9946C80.4687 40.5969 81.0947 40.2912 81.8164 40.0777C82.5455 39.8641 83.3446 39.7573 84.2136 39.7573C85.3993 39.7573 86.434 39.9709 87.3178 40.398C88.2015 40.8252 88.8864 41.4107 89.3725 42.1545C89.8659 42.8983 90.1126 43.7489 90.1126 44.7063H86.8207C86.8207 44.235 86.7213 43.8226 86.5224 43.4691C86.3309 43.1082 86.0363 42.8247 85.6387 42.6185C85.2483 42.4122 84.7549 42.3091 84.1584 42.3091C83.5839 42.3091 83.1052 42.3975 82.7223 42.5743C82.3393 42.7437 82.0521 42.9756 81.8606 43.2702C81.6691 43.5574 81.5734 43.8815 81.5734 44.2423C81.5734 44.5148 81.6397 44.7615 81.7723 44.9825C81.9122 45.2034 82.1184 45.4096 82.3909 45.6011C82.6634 45.7926 82.9985 45.973 83.3961 46.1424C83.7938 46.3118 84.2541 46.4775 84.777 46.6395C85.6534 46.9046 86.423 47.2029 87.0858 47.5343C87.756 47.8657 88.3157 48.2376 88.7649 48.65C89.2142 49.0625 89.5529 49.5301 89.7812 50.053C90.0095 50.5759 90.1237 51.1687 90.1237 51.8315C90.1237 52.5312 89.9874 53.1572 89.715 53.7095C89.4425 54.2619 89.0485 54.7295 88.5329 55.1125C88.0174 55.4954 87.4025 55.7863 86.6881 55.9852C85.9737 56.184 85.1747 56.2834 84.2909 56.2834C83.4956 56.2834 82.7112 56.1803 81.938 55.9741C81.1647 55.7606 80.4614 55.4402 79.828 55.013C79.202 54.5859 78.7012 54.0409 78.3256 53.3781C77.95 52.7153 77.7622 51.931 77.7622 51.0251H81.0873C81.0873 51.5259 81.1647 51.9494 81.3193 52.2955C81.474 52.6417 81.6912 52.9215 81.9711 53.1351C82.2583 53.3487 82.5971 53.5033 82.9874 53.599C83.3851 53.6948 83.8196 53.7427 84.2909 53.7427C84.8654 53.7427 85.3367 53.6616 85.7049 53.4996C86.0805 53.3376 86.3567 53.113 86.5335 52.8258C86.7176 52.5385 86.8096 52.2145 86.8096 51.8536ZM98.6298 53.3671V48.0425C98.6298 47.6595 98.5672 47.3318 98.442 47.0593C98.3168 46.7794 98.1216 46.5622 97.8565 46.4075C97.5987 46.2529 97.2637 46.1755 96.8512 46.1755C96.4977 46.1755 96.1921 46.2381 95.9343 46.3633C95.6766 46.4812 95.4777 46.6542 95.3378 46.8825C95.1979 47.1035 95.1279 47.3649 95.1279 47.6669H91.9464C91.9464 47.1587 92.0643 46.6763 92.2999 46.2197C92.5356 45.7631 92.878 45.3618 93.3273 45.0156C93.7765 44.6621 94.3105 44.386 94.9291 44.1871C95.5551 43.9883 96.2547 43.8888 97.028 43.8888C97.9559 43.8888 98.7808 44.0435 99.5025 44.3528C100.224 44.6621 100.791 45.1261 101.204 45.7447C101.623 46.3633 101.833 47.1366 101.833 48.0646V53.1793C101.833 53.8347 101.874 54.3723 101.955 54.7921C102.036 55.2045 102.154 55.5654 102.308 55.8747V56.0625H99.0938C98.9391 55.7385 98.8213 55.3334 98.7403 54.8473C98.6666 54.3539 98.6298 53.8605 98.6298 53.3671ZM99.0496 48.7826L99.0717 50.5832H97.2931C96.8733 50.5832 96.5088 50.6311 96.1995 50.7269C95.8902 50.8226 95.6361 50.9588 95.4372 51.1356C95.2384 51.305 95.0911 51.5038 94.9954 51.7321C94.907 51.9604 94.8628 52.2108 94.8628 52.4833C94.8628 52.7558 94.9254 53.0025 95.0506 53.2235C95.1758 53.437 95.3562 53.6064 95.5919 53.7316C95.8276 53.8494 96.1037 53.9084 96.4204 53.9084C96.8991 53.9084 97.3152 53.8126 97.6687 53.6211C98.0222 53.4297 98.2947 53.194 98.4862 52.9141C98.685 52.6343 98.7881 52.3692 98.7955 52.1188L99.635 53.4665C99.5172 53.7684 99.3552 54.0814 99.149 54.4055C98.9501 54.7295 98.6961 55.0351 98.3868 55.3224C98.0774 55.6022 97.7055 55.8342 97.271 56.0183C96.8365 56.1951 96.321 56.2834 95.7245 56.2834C94.9659 56.2834 94.2773 56.1325 93.6587 55.8305C93.0474 55.5212 92.5614 55.0977 92.2005 54.5601C91.847 54.0151 91.6703 53.3965 91.6703 52.7042C91.6703 52.0783 91.7881 51.5222 92.0238 51.0362C92.2594 50.5501 92.6056 50.1414 93.0622 49.81C93.5261 49.4712 94.1042 49.2171 94.7965 49.0477C95.4888 48.871 96.2915 48.7826 97.2047 48.7826H99.0496ZM108.34 56.0625H105.136V43.0493C105.136 42.1434 105.313 41.3812 105.667 40.7626C106.028 40.1366 106.532 39.6653 107.18 39.3486C107.836 39.0245 108.612 38.8625 109.511 38.8625C109.806 38.8625 110.089 38.8846 110.362 38.9288C110.634 38.9656 110.899 39.0135 111.157 39.0724L111.124 41.4696C110.984 41.4328 110.837 41.407 110.682 41.3922C110.527 41.3775 110.347 41.3702 110.141 41.3702C109.758 41.3702 109.43 41.4364 109.157 41.569C108.892 41.6942 108.69 41.882 108.55 42.1324C108.41 42.3828 108.34 42.6884 108.34 43.0493V56.0625ZM110.726 44.1098V46.3633H103.358V44.1098H110.726ZM117.63 56.2834C116.702 56.2834 115.87 56.1361 115.134 55.8416C114.397 55.5396 113.771 55.1235 113.256 54.5933C112.748 54.063 112.357 53.4481 112.085 52.7484C111.812 52.0414 111.676 51.2902 111.676 50.4949V50.053C111.676 49.1472 111.805 48.3186 112.063 47.5675C112.321 46.8163 112.689 46.1645 113.167 45.6122C113.654 45.0598 114.243 44.6363 114.935 44.3418C115.627 44.0398 116.408 43.8888 117.277 43.8888C118.124 43.8888 118.875 44.0288 119.53 44.3086C120.186 44.5885 120.735 44.9862 121.176 45.5017C121.626 46.0172 121.964 46.6358 122.193 47.3576C122.421 48.0719 122.535 48.8673 122.535 49.7437V51.0693H113.035V48.9483H119.409V48.7053C119.409 48.2634 119.328 47.8694 119.166 47.5233C119.011 47.1698 118.776 46.8899 118.459 46.6837C118.142 46.4775 117.737 46.3744 117.244 46.3744C116.824 46.3744 116.463 46.4664 116.161 46.6506C115.859 46.8347 115.613 47.0924 115.421 47.4238C115.237 47.7552 115.097 48.1456 115.001 48.5948C114.913 49.0367 114.869 49.5227 114.869 50.053V50.4949C114.869 50.9736 114.935 51.4154 115.068 51.8205C115.207 52.2256 115.403 52.5754 115.653 52.87C115.911 53.1645 116.22 53.3928 116.581 53.5549C116.949 53.7169 117.365 53.7979 117.829 53.7979C118.404 53.7979 118.938 53.6874 119.431 53.4665C119.932 53.2382 120.363 52.8957 120.724 52.4391L122.27 54.1182C122.02 54.4791 121.677 54.8252 121.243 55.1567C120.816 55.4881 120.3 55.7606 119.696 55.9741C119.092 56.1803 118.404 56.2834 117.63 56.2834ZM138.553 51.8536C138.553 51.5664 138.509 51.3087 138.421 51.0804C138.34 50.8447 138.185 50.6311 137.957 50.4396C137.728 50.2408 137.408 50.0456 136.996 49.8542C136.583 49.6627 136.049 49.4638 135.394 49.2576C134.665 49.022 133.972 48.7568 133.317 48.4622C132.669 48.1677 132.094 47.8252 131.594 47.4349C131.1 47.0372 130.71 46.5769 130.423 46.054C130.143 45.5311 130.003 44.9236 130.003 44.2313C130.003 43.5611 130.15 42.9535 130.445 42.4086C130.739 41.8562 131.152 41.3849 131.682 40.9946C132.212 40.5969 132.838 40.2912 133.56 40.0777C134.289 39.8641 135.088 39.7573 135.957 39.7573C137.143 39.7573 138.178 39.9709 139.061 40.398C139.945 40.8252 140.63 41.4107 141.116 42.1545C141.609 42.8983 141.856 43.7489 141.856 44.7063H138.564C138.564 44.235 138.465 43.8226 138.266 43.4691C138.074 43.1082 137.78 42.8247 137.382 42.6185C136.992 42.4122 136.498 42.3091 135.902 42.3091C135.328 42.3091 134.849 42.3975 134.466 42.5743C134.083 42.7437 133.796 42.9756 133.604 43.2702C133.413 43.5574 133.317 43.8815 133.317 44.2423C133.317 44.5148 133.383 44.7615 133.516 44.9825C133.656 45.2034 133.862 45.4096 134.134 45.6011C134.407 45.7926 134.742 45.973 135.14 46.1424C135.537 46.3118 135.998 46.4775 136.521 46.6395C137.397 46.9046 138.167 47.2029 138.829 47.5343C139.5 47.8657 140.059 48.2376 140.508 48.65C140.958 49.0625 141.296 49.5301 141.525 50.053C141.753 50.5759 141.867 51.1687 141.867 51.8315C141.867 52.5312 141.731 53.1572 141.459 53.7095C141.186 54.2619 140.792 54.7295 140.277 55.1125C139.761 55.4954 139.146 55.7863 138.432 55.9852C137.717 56.184 136.918 56.2834 136.035 56.2834C135.239 56.2834 134.455 56.1803 133.682 55.9741C132.908 55.7606 132.205 55.4402 131.572 55.013C130.946 54.5859 130.445 54.0409 130.069 53.3781C129.694 52.7153 129.506 51.931 129.506 51.0251H132.831C132.831 51.5259 132.908 51.9494 133.063 52.2955C133.218 52.6417 133.435 52.9215 133.715 53.1351C134.002 53.3487 134.341 53.5033 134.731 53.599C135.129 53.6948 135.563 53.7427 136.035 53.7427C136.609 53.7427 137.08 53.6616 137.449 53.4996C137.824 53.3376 138.1 53.113 138.277 52.8258C138.461 52.5385 138.553 52.2145 138.553 51.8536ZM143.414 50.2077V49.9757C143.414 49.0993 143.539 48.2929 143.789 47.5564C144.04 46.8126 144.404 46.1682 144.883 45.6232C145.362 45.0782 145.951 44.6548 146.651 44.3528C147.35 44.0435 148.153 43.8888 149.059 43.8888C149.965 43.8888 150.771 44.0435 151.478 44.3528C152.185 44.6548 152.778 45.0782 153.257 45.6232C153.743 46.1682 154.111 46.8126 154.361 47.5564C154.612 48.2929 154.737 49.0993 154.737 49.9757V50.2077C154.737 51.0767 154.612 51.8831 154.361 52.6269C154.111 53.3634 153.743 54.0078 153.257 54.5601C152.778 55.1051 152.189 55.5286 151.489 55.8305C150.789 56.1325 149.987 56.2834 149.081 56.2834C148.175 56.2834 147.369 56.1325 146.662 55.8305C145.962 55.5286 145.369 55.1051 144.883 54.5601C144.404 54.0078 144.04 53.3634 143.789 52.6269C143.539 51.8831 143.414 51.0767 143.414 50.2077ZM146.595 49.9757V50.2077C146.595 50.7084 146.64 51.1761 146.728 51.6106C146.816 52.0451 146.956 52.4281 147.148 52.7595C147.347 53.0835 147.604 53.3376 147.921 53.5217C148.238 53.7058 148.624 53.7979 149.081 53.7979C149.523 53.7979 149.902 53.7058 150.219 53.5217C150.535 53.3376 150.789 53.0835 150.981 52.7595C151.172 52.4281 151.312 52.0451 151.401 51.6106C151.496 51.1761 151.544 50.7084 151.544 50.2077V49.9757C151.544 49.4896 151.496 49.033 151.401 48.6059C151.312 48.1713 151.169 47.7884 150.97 47.457C150.778 47.1182 150.524 46.8531 150.208 46.6616C149.891 46.4701 149.508 46.3744 149.059 46.3744C148.61 46.3744 148.227 46.4701 147.91 46.6616C147.601 46.8531 147.347 47.1182 147.148 47.457C146.956 47.7884 146.816 48.1713 146.728 48.6059C146.64 49.033 146.595 49.4896 146.595 49.9757ZM161.63 53.7979C162.02 53.7979 162.367 53.7242 162.669 53.577C162.97 53.4223 163.206 53.2087 163.376 52.9362C163.552 52.6564 163.644 52.3287 163.652 51.9531H166.645C166.638 52.7926 166.413 53.5401 165.972 54.1956C165.53 54.8437 164.937 55.3555 164.193 55.7311C163.449 56.0993 162.617 56.2834 161.696 56.2834C160.768 56.2834 159.958 56.1288 159.266 55.8195C158.581 55.5102 158.01 55.083 157.554 54.538C157.097 53.9857 156.755 53.345 156.526 52.6159C156.298 51.8794 156.184 51.0914 156.184 50.2518V49.9315C156.184 49.0846 156.298 48.2965 156.526 47.5675C156.755 46.831 157.097 46.1903 157.554 45.6453C158.01 45.093 158.581 44.6621 159.266 44.3528C159.951 44.0435 160.754 43.8888 161.674 43.8888C162.654 43.8888 163.512 44.0766 164.248 44.4522C164.992 44.8278 165.574 45.3654 165.994 46.0651C166.421 46.7573 166.638 47.5785 166.645 48.5285H163.652C163.644 48.1308 163.56 47.77 163.398 47.4459C163.243 47.1219 163.015 46.8641 162.713 46.6727C162.418 46.4738 162.054 46.3744 161.619 46.3744C161.155 46.3744 160.776 46.4738 160.481 46.6727C160.187 46.8641 159.958 47.1293 159.796 47.468C159.634 47.7994 159.52 48.1787 159.454 48.6059C159.395 49.0256 159.366 49.4675 159.366 49.9315V50.2518C159.366 50.7158 159.395 51.1614 159.454 51.5885C159.513 52.0157 159.623 52.3949 159.785 52.7263C159.955 53.0577 160.187 53.3192 160.481 53.5107C160.776 53.7022 161.159 53.7979 161.63 53.7979ZM171.848 44.1098V56.0625H168.656V44.1098H171.848ZM168.457 40.9946C168.457 40.5306 168.619 40.1476 168.943 39.8457C169.267 39.5437 169.702 39.3928 170.247 39.3928C170.784 39.3928 171.215 39.5437 171.539 39.8457C171.871 40.1476 172.036 40.5306 172.036 40.9946C172.036 41.4585 171.871 41.8415 171.539 42.1434C171.215 42.4454 170.784 42.5964 170.247 42.5964C169.702 42.5964 169.267 42.4454 168.943 42.1434C168.619 41.8415 168.457 41.4585 168.457 40.9946ZM180.929 53.3671V48.0425C180.929 47.6595 180.866 47.3318 180.741 47.0593C180.616 46.7794 180.421 46.5622 180.156 46.4075C179.898 46.2529 179.563 46.1755 179.15 46.1755C178.797 46.1755 178.491 46.2381 178.234 46.3633C177.976 46.4812 177.777 46.6542 177.637 46.8825C177.497 47.1035 177.427 47.3649 177.427 47.6669H174.246C174.246 47.1587 174.363 46.6763 174.599 46.2197C174.835 45.7631 175.177 45.3618 175.626 45.0156C176.076 44.6621 176.61 44.386 177.228 44.1871C177.854 43.9883 178.554 43.8888 179.327 43.8888C180.255 43.8888 181.08 44.0435 181.802 44.3528C182.523 44.6621 183.091 45.1261 183.503 45.7447C183.923 46.3633 184.133 47.1366 184.133 48.0646V53.1793C184.133 53.8347 184.173 54.3723 184.254 54.7921C184.335 55.2045 184.453 55.5654 184.608 55.8747V56.0625H181.393C181.238 55.7385 181.12 55.3334 181.039 54.8473C180.966 54.3539 180.929 53.8605 180.929 53.3671ZM181.349 48.7826L181.371 50.5832H179.592C179.173 50.5832 178.808 50.6311 178.499 50.7269C178.189 50.8226 177.935 50.9588 177.736 51.1356C177.538 51.305 177.39 51.5038 177.295 51.7321C177.206 51.9604 177.162 52.2108 177.162 52.4833C177.162 52.7558 177.225 53.0025 177.35 53.2235C177.475 53.437 177.655 53.6064 177.891 53.7316C178.127 53.8494 178.403 53.9084 178.72 53.9084C179.198 53.9084 179.614 53.8126 179.968 53.6211C180.321 53.4297 180.594 53.194 180.785 52.9141C180.984 52.6343 181.087 52.3692 181.095 52.1188L181.934 53.4665C181.816 53.7684 181.654 54.0814 181.448 54.4055C181.249 54.7295 180.995 55.0351 180.686 55.3224C180.377 55.6022 180.005 55.8342 179.57 56.0183C179.136 56.1951 178.62 56.2834 178.024 56.2834C177.265 56.2834 176.577 56.1325 175.958 55.8305C175.347 55.5212 174.861 55.0977 174.5 54.5601C174.146 54.0151 173.969 53.3965 173.969 52.7042C173.969 52.0783 174.087 51.5222 174.323 51.0362C174.559 50.5501 174.905 50.1414 175.361 49.81C175.825 49.4712 176.403 49.2171 177.096 49.0477C177.788 48.871 178.591 48.7826 179.504 48.7826H181.349ZM189.943 39.0945V56.0625H186.751V39.0945H189.943Z"
                fill="#003060"
              />
            </g>
            <ellipse
              cx="38.5373"
              cy="38.5374"
              rx="25.5"
              ry="29"
              transform="rotate(-45 38.5373 38.5374)"
              fill="url(#paint0_linear_100_1049)"
            />
            <path
              d="M44.1391 39.4742C41.4879 36.9706 36.9794 34.8838 33.9968 33.5024C33.4915 33.2694 33.0354 33.0594 32.6482 32.8724C31.5227 32.3309 29.9838 30.8314 30.6466 29.1088C31.0929 27.9439 32.2249 27.3566 34.0165 27.3566C34.5907 27.3566 35.2207 27.4222 35.8933 27.5469C38.2296 27.9833 40.0015 28.8561 41.0055 29.3516C41.1302 29.4139 41.2746 29.4205 41.4058 29.3745C41.5338 29.3253 41.6421 29.2269 41.6979 29.0989L43.998 23.9113C44.0998 23.6849 44.021 23.4158 43.811 23.278C42.1901 22.2017 38.1443 20.6038 33.649 20.6038C32.9993 20.6038 32.3529 20.6366 31.7229 20.7022C28.1398 21.0697 24.5501 22.0245 22.5616 26.4903C21.3213 29.2695 21.3246 32.3999 22.5649 34.6574C23.8905 37.1216 26.0627 38.2241 28.8124 39.6153L29.1668 39.7958C31.1519 40.7867 33.5308 41.8892 35.096 42.6144C37.4093 43.73 38.2657 45.7119 37.7341 46.9063C36.8777 48.8324 34.9844 49.2556 31.7098 48.327C28.819 47.5428 26.1513 45.328 25.4065 44.6684C25.2949 44.57 25.1473 44.5241 24.9963 44.5438C24.8487 44.5634 24.7174 44.6488 24.6354 44.7702L21.0719 50.2334C20.9374 50.4402 20.9669 50.7125 21.1441 50.8831C22.9915 52.6649 24.4976 53.7017 27.1062 54.9847C28.8616 55.8477 31.4308 56.3661 33.9804 56.3661C36.6448 56.3661 43.1515 55.7492 46.0062 50.0464C47.8273 46.3977 47.148 42.552 44.1391 39.4742Z"
              fill="#40C0E7"
            />
            <path
              d="M59.2286 40.1137L47.9786 60.3637C47.7761 60.7237 47.4049 60.9375 46.9999 60.9375C46.9099 60.9375 46.8086 60.9262 46.7186 60.9037C46.2236 60.7687 45.8749 60.33 45.8749 59.8125V47.4375H35.7499C35.3674 47.4375 35.0186 47.2462 34.8049 46.9312C34.6024 46.6162 34.5686 46.2113 34.7149 45.8625L42.5899 27.8625C42.7699 27.4575 43.1749 27.1875 43.6249 27.1875H50.3749C50.7461 27.1875 51.0949 27.3675 51.3086 27.6825C51.5111 27.9863 51.5561 28.38 51.4211 28.7287L47.5399 38.4375H58.2499C58.6436 38.4375 59.0149 38.6512 59.2174 38.9887C59.4199 39.3375 59.4311 39.765 59.2286 40.1137Z"
              fill="#FFB841"
            />
            <circle
              cx="19"
              cy="59.0625"
              r="6"
              transform="rotate(180 19 59.0625)"
              fill="#D2F3FF"
            />
            <defs>
              <filter
                id="filter0_d_100_1049"
                x="73.7622"
                y="38.8625"
                width="120.181"
                height="25.4209"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_100_1049"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_100_1049"
                  result="shape"
                />
              </filter>
              <linearGradient
                id="paint0_linear_100_1049"
                x1="38.5373"
                y1="9.53737"
                x2="38.5373"
                y2="67.5374"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#D2F3FF" />
                <stop offset="1" stop-color="#B0E9FF" />
              </linearGradient>
            </defs>
          </svg>
        </a>
      </div>
      <div className=" search m-2x flex gap-2 items-center">
        <input
          type="text"
          name="search"
          placeholder="Bạn đang muốn tìm ai?"
          className="rounded-xl pl-3x outline-none border border-Black25 focus:border-Black50 py-2x shadow-sm w-[430px] h-[40px]"
        />
        <button className="p-1x text-center rounded-full hover:shadow-md h-[45px] w-[45px] border border-Black10">
          <BsSearch className="ml-0.5" size={25} />
        </button>
      </div>
      {auth ? (<div className="flex items-center  m-2x cursor-pointer">
        <h6 className="font-bold">{user}</h6>
        <div className="relative !z-10 ml-1">
          <Link to={config.routes.personal}>
            <img
              src={avatar}
              className="relative avt h-[40px] w-[40px] rounded-full hover:shadow-md z-20"
              alt="Avatar"
            />
          </Link>
        </div>
        <button className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900" onClick={logout}>Đăng xuất</button>
        <button className="ml-1 p-1x text-center">
          <BiMessageSquare className="ml-1.5" size={17} />
        </button>
        <button className="ml-1 p-1x text-center">
          <BsBell
            className="ml-1.5
          "
            size={17}
          />
        </button>
      </div>) : (<div className="flex items-center gap-4">
        <h6 className="text-Black50">Bạn đã có tài khoản chưa?</h6>
        <Link to={config.routes.login} class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 outline-none"><h6>Đăng nhập</h6></Link>
        <Link to={config.routes.register} class="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900 outline-noe"><h6>Đăng ký</h6></Link>
      </div>)}
    </header>
  );
};

export default Header;
