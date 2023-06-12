import ReactPlayer from "react-player";
import { GoMute, GoUnmute } from 'react-icons/go'
import { styled } from 'styled-components';
import { useState } from "react";
function Intro(props) {
    const { idSection } = props
    const [isMuted, setIsMuted] = useState(false);

    return (
        <IntroContainer id={idSection}>
            <div>
                <ReactPlayer
                    playing={true}
                    loop={true}
                    width="100%"
                    height="100%"
                    volume={1}
                    muted={isMuted}
                    url="https://vimeo.com/92637827"
                    className="videoIntro"
                />
                <div className="infoIntro">
                    <h1 className="headingIntro">White Lotus Restaurant</h1>
                    <p className="overviewIntro">Sự kết hợp hoàn hảo giữa hương vị và không gian.</p>
                    <p className="bottomIntro">Nhà hàng White Lotus, nằm trong khuôn viên trang nhã và đẳng cấp, mang đến không gian trang trọng và tinh tế, nơi mỗi chi tiết đều được sắp xếp một cách tỉ mỉ và tinh tế. Với thực đơn ngắn gọn nhưng đầy đủ các món ăn đặc trưng mọi miền, nhà hàng White Lotus mang đến những món ăn tinh tế, hòa quyện giữa hương vị truyền thống và sáng tạo, đem đến trải nghiệm ẩm thực tuyệt vời cho thực khách. Đặc biệt, phong cách phục vụ chuyên nghiệp và ân cần tại White Lotus khiến khách hàng cảm thấy được chào đón và quan tâm từ những khoảnh khắc đầu tiên, tạo nên một không gian ấm cúng và đi vào lòng người.</p>
                </div>
                {
                    isMuted ? (
                        <GoMute className="btnVolume"
                            onClick={() => setIsMuted(prev => !prev)}
                        />
                    ) : (
                        <GoUnmute className="btnVolume"
                            onClick={() => setIsMuted(prev => !prev)}
                        />
                    )
                }

            </div>

            <div className="fadeBottom">

            </div>
        </IntroContainer>

    )
}

export default Intro;

const IntroContainer = styled.div`
background-color: var(--color-background);
position: relative;
color: var(--color-white);
padding-top: 56%;


.videoIntro{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
        height: 100%;
        object-fit: cover;
}


.infoIntro {
    position: absolute;
    top: 140px;
    left: 30px;
    width: 50%;
    padding: 200px 0 0 20px;

    @media screen and (max-width: 1200px) {
        top: 0;
        left: 25px;
    }

    @media screen and (max-width: 800px) {
        padding-top: 120px;
        top: 0;
        left: 25px;
    }

    @media screen and (max-width: 600px) {
        top: 150px;
        left: 15px;
    }

    .headingIntro {
        font-size: 60px;
        transition: all 0.3s ease;

        @media screen and (max-width: 1200px) {
            font-size: 26px;
        }

        @media screen and (max-width: 800px) {
            font-size: 21px;
        }
        @media screen and (max-width: 600px) {
            font-size: 18px;
        }
    }

    .overviewIntro {
        max-width: 580px;
        width: 100%;
        line-height: 1.3;
        padding-top: 25px;
        font-size: 25px;
        text-align: justify;

        @media screen and (max-width: 1200px) {
            font-size: 16px;
        }

        @media screen and (max-width: 800px) {
            font-size: 10px;
        }
        @media screen and (max-width: 600px) {
            font-size: 10px;
        }
    }
    .bottomIntro {
        padding-top: 25px;
        font-size: 20px;
        text-align: justify;

        @media screen and (max-width: 1200px) {
            font-size: 14px;
        }

        @media screen and (max-width: 800px) {
            font-size: 10px;
        }
        @media screen and (max-width: 600px) {
            font-size: 10px;
        }
    }
}

.btnVolume {
    position: absolute;
    height: 40px;
    width: 40px;
    right: 10%;
    top: 50%;
    cursor: pointer;
    border-radius: 50%;
    padding: 6px;
    color: var(--color-white);
    border: #fff solid 1px;
    transition: all 0.3s ease;
    transform: scale(1);
    
    &:hover {
        color: #fff;
        transform: scale(1.2);
        background-color: var(--color-background);
    }
        @media screen and (max-width: 1200px) {
            height: 30px;
            width: 30px;
            padding: 4px;
        }
        @media screen and (max-width: 600px) {
            height: 20px;
             width: 20px;
             padding: 1px;
        }
}

.fadeBottom {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100px;
    background-image: linear-gradient(
        180deg,
        transparent,
        rgba(15,15,15,0.6) 40%,
        rgb(17,17,17),
        rgb(17,17,17)
    );
}
`;