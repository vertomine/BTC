export default function handler(req, res) {
    if (req.method === "POST") {
        const { code } = req.body;

        // 实际订阅码和数据（仅存储在后端）
        const VALID_SUBSCRIPTION_CODE = "9wYbVE8K3bUM";
        const REAL_VALUES = {
            btc: "9000.12",
            riseFall: "Rise",
            safetyLine: "5%",
        };

        // 验证订阅码
        if (code === VALID_SUBSCRIPTION_CODE) {
            res.status(200).json({ success: true, data: REAL_VALUES });
        } else {
            res.status(403).json({ success: false });
        }
    } else {
        res.setHeader("Allow", ["POST"]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
