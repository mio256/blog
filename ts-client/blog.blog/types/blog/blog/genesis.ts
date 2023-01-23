/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Params } from "./params";
import { PostCount } from "./post_count";
import { StoredPost } from "./stored_post";

export const protobufPackage = "blog.blog";

/** GenesisState defines the blog module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  postCount:
    | PostCount
    | undefined;
  /** this line is used by starport scaffolding # genesis/proto/state */
  storedPostList: StoredPost[];
}

function createBaseGenesisState(): GenesisState {
  return { params: undefined, postCount: undefined, storedPostList: [] };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.postCount !== undefined) {
      PostCount.encode(message.postCount, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.storedPostList) {
      StoredPost.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.postCount = PostCount.decode(reader, reader.uint32());
          break;
        case 3:
          message.storedPostList.push(StoredPost.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      postCount: isSet(object.postCount) ? PostCount.fromJSON(object.postCount) : undefined,
      storedPostList: Array.isArray(object?.storedPostList)
        ? object.storedPostList.map((e: any) => StoredPost.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.postCount !== undefined
      && (obj.postCount = message.postCount ? PostCount.toJSON(message.postCount) : undefined);
    if (message.storedPostList) {
      obj.storedPostList = message.storedPostList.map((e) => e ? StoredPost.toJSON(e) : undefined);
    } else {
      obj.storedPostList = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    message.postCount = (object.postCount !== undefined && object.postCount !== null)
      ? PostCount.fromPartial(object.postCount)
      : undefined;
    message.storedPostList = object.storedPostList?.map((e) => StoredPost.fromPartial(e)) || [];
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
