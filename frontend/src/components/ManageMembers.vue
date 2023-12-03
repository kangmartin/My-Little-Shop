<template>
    <div class="list-container">
      
      <ul>
        <li v-for="member in members" :key="member.id" class="member-card">
          <div class="member-info">
            <h3>{{ member.name }}</h3>
            <p><strong>Email:</strong> {{ member.email }}</p>
            <p><strong>Role:</strong> {{ member.role }}</p>
            <p><strong>Status:</strong> <span :class="{'banned': member.isBan, 'active': !member.isBan}">{{ member.isBan ? 'Banned' : 'Active' }}</span></p>
          </div>
          <div class="member-actions">
            <button @click="banMember(member.email, member.isBan)" :class="{'ban': !member.isBan, 'unban': member.isBan}">{{ member.isBan ? 'Unban' : 'Ban' }}</button>
            <button @click="deleteMember(member.email)" class="ban">Delete</button>
            <button @click="changeRole(member.email, member.role)" :class="{'ban': member.role==='admin', 'unban': member.role==='user'}">{{ member.role === 'user' ? 'Make Admin' : 'Make User' }}</button>
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        members: []
      };
    },
    async created() {
      this.fetchMembers();
    },
    methods: {
      async fetchMembers() {
        try {
          const response = await axios.get('http://localhost:3000/api/members/all');
          this.members = response.data;
        } catch (error) {
          console.error('Error when fetch members:', error);
        }
      },
      async banMember(email, isBan) {
        try {
          const response = await axios.patch(`http://localhost:3000/api/members/${isBan ? 'unban' : 'ban'}`, { email });
          console.log(response.data.message);
          this.fetchMembers();
        } catch (error) {
          console.error('Error when trying to ban/unban member:', error);
        }
      },
      async deleteMember(email) {
        try {
          const response = await axios.delete('http://localhost:3000/api/members/delete', { data: { email } });
          console.log(response.data.message);
          this.fetchMembers();
        } catch (error) {
          console.error('Error when trying to delete member:', error);
        }
      },
      async changeRole(email, currentRole) {
        try {
          const newRole = currentRole === 'user' ? 'admin' : 'user';
          const response = await axios.patch('http://localhost:3000/api/members/change-role', { email, newRole });
          console.log(response.data.message);
          this.fetchMembers();
        } catch (error) {
          console.error('Error when trying to change role:', error);
        }
      }
    }
  };
  </script>
<style scoped>


.list-container {
 background-color: #f7f7f7;
 padding: 20px;
 border-radius: 5px;
 width: 85%;
 height: 567px;
 overflow-y: auto;
}


ul {
 list-style-type: none;
 padding: 0;
 display: grid;
 grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
 gap: 20px;
}

li {
 background-color: #f9f9f9;
 border: 1px solid #e1e1e1;
 padding: 10px;
 border-radius: 8px;
 display: flex;
 align-items: center;
 gap: 15px;
}

img {
 width: 50px;
 height: auto;
 object-fit: cover;
}

button {
 margin-left: auto;
 padding: 5px 10px;

 color: white;
 border: none;
 border-radius: 5px;
 cursor: pointer;
 transition: background-color 0.3s;
}





.member-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.member-actions {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}

.ban {
  background-color: #ff4d4f;
}

.unban {
  background-color: #28a745;
}
</style>


 
