// import {
//   loginByUsername,
//   logout,
//   getUserInfo
// } from '@/api/modules/user' // 使用api接口数据
import { loginByUsername, logout, getUserInfo } from "@/mock/login"; // 使用mock数据
import { getToken, setToken, removeToken } from "@/utils/auth";
const state = {
  user: "",
  status: "",
  code: "",
  token: getToken(),
  name: "",
  avatar: "",
  introduction: "",
  roles: [],
  setting: {
    articlePlatform: [],
  },
};
const mutations = {
  SET_CODE: (state, code) => {
    state.code = code;
  },
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction;
  },
  SET_SETTING: (state, setting) => {
    state.setting = setting;
  },
  SET_STATUS: (state, status) => {
    state.status = status;
  },
  SET_NAME: (state, name) => {
    state.name = name;
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar;
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles;
  },
};
const actions = {
  // 用户名登录
  LoginByUsername({ commit }, userInfo) {
    return new Promise((resolve, reject) => {
      loginByUsername(userInfo)
        .then((res) => {
          commit("SET_TOKEN", res.data.token);
          setToken(res.data.token);
          resolve(res);
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    });
  },

  // 获取用户信息
  GetUserInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getUserInfo(state.token)
        .then((res) => {
          if (!res.data) {
            reject("error");
          }
          const data = res.data;

          if (data.roles && data.roles.length > 0) {
            // 验证返回的roles是否是一个非空数组
            commit("SET_ROLES", data.roles);
          } else {
            reject("获取用户信息: 角色必须为非空数组 !");
          }

          commit("SET_NAME", data.name);
          commit("SET_AVATAR", data.avatar);
          commit("SET_INTRODUCTION", data.introduction);
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  // 第三方验证登录
  // LoginByThirdparty({ commit, state }, code) {
  //   return new Promise((resolve, reject) => {
  //     commit('SET_CODE', code)
  //     loginByThirdparty(state.status, state.email, state.code).then(res => {
  //       commit('SET_TOKEN', res.data.token)
  //       setToken(res.data.token)
  //       resolve()
  //     }).catch(error => {
  //       reject(error)
  //     })
  //   })
  // },

  // 登出
  LogOut({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout(state.token)
        .then(() => {
          commit("SET_TOKEN", "");
          commit("SET_ROLES", []);
          removeToken();
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  // 前端 登出
  FedLogOut({ commit }) {
    return new Promise((resolve) => {
      commit("SET_TOKEN", "");
      removeToken();
      resolve();
    });
  },

  // 动态修改权限
  ChangeRoles({ commit, dispatch }, role) {
    return new Promise((resolve) => {
      commit("SET_TOKEN", role);
      setToken(role);
      getUserInfo(role).then((res) => {
        const data = res.data;
        commit("SET_ROLES", data.roles);
        commit("SET_NAME", data.name);
        commit("SET_AVATAR", data.avatar);
        commit("SET_INTRODUCTION", data.introduction);
        dispatch("GenerateRoutes", data); // 动态修改权限后 重绘侧边菜单
        resolve();
      });
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
