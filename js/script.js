// 使用 fetch 加载 header.html 文件并插入到页面中
document.addEventListener("DOMContentLoaded", function() {
    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-container").innerHTML = data;

            // 根据页面路径设置导航栏的活动状态
            const path = window.location.pathname;
            if (path.includes("index.html")) {
                document.getElementById("nav-spot").classList.add("active");
            } else if (path.includes("contract.html")) {
                document.getElementById("nav-contract").classList.add("active");
            } else if (path.includes("subscription.html")) {
                document.getElementById("nav-subscription").classList.add("active");
            }
        })
        .catch(error => console.log("Error loading header:", error));
});
// 订阅码
const correctCode = "9wYbVE8K3bUM";

// 验证订阅码
function verifyCode() {
    const inputCode = document.getElementById("subscription-code").value;
    const verificationMessage = document.getElementById("verification-message");

    // 检查订阅码
    if (inputCode === correctCode) {
        // 显示真实的数值
        document.getElementById("btc-value").innerText = "9000.12";
        document.getElementById("rise-fall-value").innerText = "Rise";
        document.getElementById("safe-value").innerText = "5%";
        verificationMessage.innerText = "Verification passed";
        verificationMessage.style.color = "green";
    } else {
        verificationMessage.innerText = "Incorrect subscription code";
        verificationMessage.style.color = "red";
    }
}

// 页面加载时，设置初始的马赛克值（在未输入订阅码之前）
window.onload = function() {
    document.getElementById("btc-value").innerText = "******";
    document.getElementById("rise-fall-value").innerText = "******";
    document.getElementById("safe-value").innerText = "******";
};
document.addEventListener("DOMContentLoaded", () => {
    const getAddressBtn = document.getElementById("get-address-btn");
    const paymentInfo = document.getElementById("payment-info");
    const generatingText = document.getElementById("generating-text");
    const qrCode = document.getElementById("qr-code");
    const walletAddress = document.getElementById("wallet-address");
    const copyBtn = document.getElementById("copy-btn");

    const wallet = "TKs7sxuJiSLZeLti9KBxk9C66Zfis9v6Se";

    getAddressBtn.addEventListener("click", () => {
        // 隐藏按钮
        getAddressBtn.classList.add("hidden");

        // 显示生成文本
        paymentInfo.classList.remove("hidden");
        generatingText.classList.remove("hidden");

        // 5秒后显示二维码和钱包地址
        setTimeout(() => {
            generatingText.classList.add("hidden");

            // 显示二维码
            qrCode.classList.remove("hidden");
            qrCode.src = `https://api.qrserver.com/v1/create-qr-code/?data=${wallet}&size=200x200`;

            // 显示钱包地址和复制按钮
            walletAddress.classList.remove("hidden");
            copyBtn.classList.remove("hidden");
        }, 5000);
    });

    copyBtn.addEventListener("click", () => {
        // 复制钱包地址到剪贴板
        navigator.clipboard.writeText(wallet).then(() => {
            alert("Wallet address copied to clipboard!");
        }).catch(() => {
            alert("Failed to copy the wallet address. Please try again.");
        });
    });
});
const logos = [
    "assets/logo1.svg", "assets/logo2.svg", "assets/logo3.png", "assets/logo4.svg",
    "assets/logo5.svg", "assets/logo6.svg", "assets/logo7.svg", "assets/logo8.svg",
    "assets/logo9.svg", "assets/logo10.svg", "assets/logo11.svg", "assets/logo12.svg",
    "assets/logo13.svg", "assets/logo14.svg", "assets/logo15.svg", "assets/logo16.svg",
    "assets/logo17.svg", "assets/logo18.svg", "assets/logo19.svg", "assets/logo20.svg",
    "assets/logo21.svg", "assets/logo22.svg", "assets/logo23.svg", "assets/logo24.svg",
    "assets/logo25.svg", "assets/logo26.svg", "assets/logo27.svg", "assets/logo28.svg",
    "assets/logo29.svg", "assets/logo30.svg", "assets/logo31.svg", "assets/logo32.svg",
    "assets/logo33.svg", "assets/logo34.svg", "assets/logo35.svg", "assets/logo36.png"
];

const logoDisplay = document.getElementById("logo-display");
let currentStartIndex = 0;

function updateLogoWall() {
    // 清空当前显示
    logoDisplay.innerHTML = "";

    // 显示 12 个 LOGO (从 currentStartIndex 开始)
    const visibleLogos = logos.slice(currentStartIndex, currentStartIndex + 12);
    visibleLogos.forEach((logoSrc) => {
        const logoDiv = document.createElement("div");
        logoDiv.className = "logo";
        const logoImg = document.createElement("img");
        logoImg.src = logoSrc;
        logoImg.alt = "Partner Logo";
        logoDiv.appendChild(logoImg);
        logoDisplay.appendChild(logoDiv);
    });

    // 更新索引，循环显示
    currentStartIndex = (currentStartIndex + 12) % logos.length;
}

// 初始化 LOGO 墙
updateLogoWall();
setInterval(updateLogoWall, 3000); // 每 3 秒更新一次
