import { create } from "zustand";

type VideoState = {
  id: string;
  isPaused: boolean;
};
type State = {
  click: number;
  isPlaying: boolean;
  videos: VideoState[];
};

type Actions = {
  togglePlayback: (id: string) => void;
  setVideoState: (videos: VideoState[]) => void;
};

export const useStore = create<State & Actions>((set) => ({
  click: 0,
  isPlaying: true,
  videos: [],
  togglePlayback: (id: string) =>
    set((state) => ({
      videos: state.videos.map((video) =>
        video.id === id ? { ...video, isPaused: !video.isPaused } : video
      ),
    })),
  setVideoState: (videos: VideoState[]) =>
    set((state) => ({ ...state, videos: videos })),
}));
