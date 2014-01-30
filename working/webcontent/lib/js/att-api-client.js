var AttApiClient = (function () {

	var _serverPath = "";

	return {

		setServerPath: function (serverPath) {
			_serverPath = serverPath || "";
		},
		serverSpeechToText: function (filenameOnServer) {
			var requestUrl = _serverPath
				+ "/att/speech/speechtotext?filename="
				+ encodeURIComponent(filenameOnServer);
			return jQuery.post(requestUrl);
		},
		speechToText: function (audioBlob) {
			alert("i wuz here 2");
			var fd = new FormData();
			fd.append("speechaudio", audioBlob);
			alert("i wuz here 3");
			return jQuery.post(_serverPath + "/att/speech/speechtotext", fd);
		},
		textToSpeech: function (text) {

		}
	}

}());