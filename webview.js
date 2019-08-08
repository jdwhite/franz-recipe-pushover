"use strict";

module.exports = Franz => {
  const getMessages = () => {
    const totalMessages = document.querySelector("#app_0 > div.app_counter").innerHTML;
    Franz.setBadge(totalMessages);
  };

  Franz.loop(getMessages);

};