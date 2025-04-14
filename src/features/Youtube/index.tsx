import React from "react";

import {
  getYouTubeChannelInfo,
  getYouTubeVideos,
} from "../Technologies/server/action";

const Index = async () => {
  const channelId = "YOUR_CHANNEL_ID";

  const profile = await getYouTubeChannelInfo(channelId);
  if (profile) {
    const videos = await getYouTubeVideos(profile.uploadsPlaylistId);
    console.log("Channel:", profile);
    console.log("Videos:", videos);
  }

  return <></>;
};

export default Index;
