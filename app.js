function successedEventMsg(values) {
  console.log("successedEventMsg : " + values);
  // const event = new CustomEvent("SUCCESSED_EVENT", values);
  // window.dispatchEvent(event);
  if (!window.flutter_inappwebview) {
    window.flutter_inappwebview?.callHandler("SUCCESSED_EVENT", values);
  }
  if (!window.SUCCESSED_EVENT) {
    window.SUCCESSED_EVENT?.postMessage(values);
  }
}

function failedEventMsg(values) {
  console.log("failedEventMsg : " + values);

  if (!window.flutter_inappwebview) {
    window.flutter_inappwebview?.callHandler("FAILED_EVENT", values);
  }
  if (!window.FAILED_EVENT) {
    window.FAILED_EVENT?.postMessage(values);
  }
}

function onClosedSuccessedPopup(values) {
  if (!window.flutter_inappwebview) {
    window.flutter_inappwebview?.callHandler("CLOSED_SUCCESSED_POPUP", values);
  }
  if (!window.CLOSED_SUCCESSED_POPUP) {
    window.CLOSED_SUCCESSED_POPUP?.postMessage(values);
  }
}
function onClosedFailedPopup(values) {
  if (!window.flutter_inappwebview) {
    window.flutter_inappwebview?.callHandler("CLOSED_FAILED_POPUP", values);
  }
  if (!window.CLOSED_FAILED_POPUP) {
    window.CLOSED_FAILED_POPUP?.postMessage(values);
  }
}
window.logger = (flutter_value) => {
  console.log({ js_context: this, flutter_value });
};
