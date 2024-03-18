import { create } from "zustand";

type VideoState = {
  id: string;
  isPaused: boolean;
};
type State = {
  click: number;
  isPlaying: boolean;
  videos: VideoState[] | undefined;
};

type Actions = {
  togglePlayback: (id: string) => void;
  setVideoState: (videos: VideoState[] | undefined) => void;
};

export const useStore = create<State & Actions>((set) => ({
  click: 0,
  isPlaying: true,
  videos: [],
  togglePlayback: (id: string) =>
    set((state) => ({
      videos: state.videos?.map((video) =>
        video.id === id ? { ...video, isPaused: !video.isPaused } : video
      ),
    })),
  setVideoState: (videos: VideoState[] | undefined) =>
    set((state) => ({ ...state, videos: videos })),
}));
