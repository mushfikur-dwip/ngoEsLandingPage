import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export default function MyApp() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "30min" });
            cal("floatingButton", { "calLink": "mushfikur-rahman/30min", "config": { "layout": "month_view" }, "buttonColor": "#ee2461", "hideButtonIcon": true, "buttonText": "Book 30 Min Call" });
            cal("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }, [])
};
