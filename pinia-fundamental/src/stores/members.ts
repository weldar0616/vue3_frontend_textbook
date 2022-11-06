import { ref, computed } from "vue";
import { defineStore } from "pinia";
import type { Member } from "@/interfaces";

export const useMembersStore = defineStore("members", () => {
  const memberList = ref(new Map<number, Member>());
  const getById = (id: number): Member => {
    return memberList.value.get(id) as Member;
  };

  function initList() {
    memberList.value.set(33456, {
      id: 33456,
      name: "田中",
      email: "tanaka@hoge.com",
      points: 35,
      note: "初回特典あり",
    });
    memberList.value.set(47783, {
      id: 47783,
      name: "鈴木",
      email: "suzuki@hoge.com",
      points: 53,
    });
  }

  function addMember(member: Member) {
    memberList.value.set(member.id, member);
  }

  return {
    memberList,
    getById,
    initList,
    addMember,
  };
});
