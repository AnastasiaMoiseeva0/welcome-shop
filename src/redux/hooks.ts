import { Dispatch } from "redux";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { ProjectAction } from "./actions";
import { RootState } from "./store";

export const useAppDispatch = useDispatch<Dispatch<ProjectAction>>

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;