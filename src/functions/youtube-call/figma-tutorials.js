import Acessibility from "../acessibility-menu/acessibility-menu.mjs";

Acessibility();

import ChangeTheme from "../change-ui-theme/change-theme.mjs";

ChangeTheme();

import ShowMenu from "../mobile-menu/show-menu.mjs";

ShowMenu()

const FigmaTutorials = () => {
  const youTubeCode = "AIzaSyBFnd91l4uzbnW5ZA4wK-4HNp4MZUV6NHU";

  const playListItems =
    "https://www.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UCTt8-o-ya6n25WtuYTj0hBw&maxResults=25&key=AIzaSyBFnd91l4uzbnW5ZA4wK-4HNp4MZUV6NHU";

  const videosInPLayList = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=25&playlistId=PLhlu-GBEnLHijtft11MJmlhErK2cbl-4D&key=${youTubeCode}`;

  fetch(videosInPLayList)
    .then((res) => res.json())
    .then((youtubeData) => {
      const youtubeVideos = youtubeData.items;

      const videoGrid = document.querySelector(".grid-cards");

      for (let i = 0; i < youtubeVideos.length; i++) {
        const content = youtubeVideos[i];
        // console.log("pegando video id", content.snippet)
        // console.log("dentro array", videoFrame.src, content.contentDetails.videoId)

        const videoCard = document.createElement("div");
        videoCard.classList.add("card-video");

        const videoFrame = document.createElement("iframe");
        videoFrame.src = `https://www.youtube.com/embed/${content.contentDetails.videoId}`;
        videoFrame.title = content.snippet.title;
        videoFrame.frameborder = "0";
        videoFrame.allow = "accelerometer" + 
        ";" + "gyroscope" +
        ";" + "autoplay" +
        ";" + "clipboard-write" +
        ";" + "encrypted-media" +
        ";" + "web-share" +
        ";" + "picture-in-picture" +
        ";" + "fullscreen";

        const videoTitle = document.createElement("h3");
        videoTitle.textContent = content.snippet.title;

        const videoDescription = document.createElement("p");
        videoDescription.textContent = content.snippet.description;

        videoCard.appendChild(videoFrame);
        videoCard.appendChild(videoTitle);
        videoCard.appendChild(videoDescription);
        videoGrid.appendChild(videoCard);
      }
    })
    .catch((error) => console.error("Erro na requisição:", error));
};

FigmaTutorials()
