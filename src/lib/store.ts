import { create } from "zustand";

type VideoState = {
  id: string;
  isPlaying: boolean;
};
type State = {
  click: number;
  isPlaying: boolean;
  videos: VideoState[] | undefined;
};

type Actions = {
  startPlayBack: (id: string) => void;
  stopPlayBack: (id: string) => void;
  togglePlayback: (id: string) => void;
  setVideoState: (videos: VideoState[] | undefined) => void;
};

export const useStore = create<State & Actions>((set) => ({
  click: 0,
  isPlaying: true,
  videos: [],
  togglePlayback: (id: string) =>
    set((state) => ({
      videos: state.videos?.map((video) => ({
        ...video,
        isPlaying: video.id === id ? !video.isPlaying : video.isPlaying,
      })),
    })),
  startPlayBack: (id: string) =>
    set((state) => ({
      videos: state.videos?.map((video) => ({
        ...video,
        isPlaying: video.id === id ? true : video.isPlaying,
      })),
    })),
  stopPlayBack: (id: string) =>
    set((state) => ({
      videos: state.videos?.map((video) => ({
        ...video,
        isPlaying: video.id === id ? false : video.isPlaying,
      })),
    })),
  setVideoState: (videos: VideoState[] | undefined) =>
    set((state) => ({ ...state, videos: videos })),
}));
