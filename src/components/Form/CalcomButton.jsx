// components/CalcomButton.jsx
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function CalcomButton() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ namespace: "30min" });
            cal("floatingButton", {
                calLink: "mushfikur-rahman/30min",
                config: { layout: "month_view" },
                buttonColor: "#ee2461",
                hideButtonIcon: true,
                buttonText: "Set A Meeting"
            });
        })();
    }, []);

    return null;
}
