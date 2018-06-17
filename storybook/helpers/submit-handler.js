export default function (e) {
    const text = `URL: '${e.detail.target}'
METHOD: '${e.detail.method}'
BODY: ${JSON.stringify(e.detail.value, null, 2)}`;

    alert(text);
}
