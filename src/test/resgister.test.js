import { describe, expect, it } from "vitest";
import supertest from "supertest";
import app from "../server.js";

describe("Test Registration endpoint", () => {
  const timeSt = new Date().getTime();

  it("should not createthe user", async () => {
    const resp = await supertest(app)
      .post("/api/user/register/create")
      .set(
        "authorization",
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywibmFtZSI6InJhamVzaDEyMzQiLCJwaG9uZSI6MTIzNDU2Nzg5OCwiZW1haWwiOiJ0ZXN0MzEyZXExMkB3ZS5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRNSkdxQVBERW9PelFWZjhmQVMvMndlaG5lUUN6SDNvWWRTdVNQdndtQ1ZzcnJRLklxNlFZNiIsImNyZWF0ZWRfYXQiOiIyMDI0LTA3LTA5VDEwOjQ4OjExLjIwM1oiLCJ1cGRhdGVkX2F0IjoiMjAyNC0wNy0wOVQxMDo0ODoxMS4yMDNaIiwiaWF0IjoxNzIwNTk5MzgyLCJleHAiOjE3NTIxMzUzODJ9.8N5_4RvzbjKir5uuZid7792MrPjPek2BUATb2MMJrrI "
      )
      .send({
        name: "Rajesh",
        email: "yadavq1" + timeSt + "@tc.com",
        phone: 1234567890,
        password: "A!123Abcdef@",
      });

    expect(resp.status).toBe(201);
    expect(resp.body.message).toBe("User is created");
  });

  it("should not createthe user throw missing filed error", async () => {
    const resp = await supertest(app)
      .post("/api/user/register/create")
      .set(
        "authorization",
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywibmFtZSI6InJhamVzaDEyMzQiLCJwaG9uZSI6MTIzNDU2Nzg5OCwiZW1haWwiOiJ0ZXN0MzEyZXExMkB3ZS5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRNSkdxQVBERW9PelFWZjhmQVMvMndlaG5lUUN6SDNvWWRTdVNQdndtQ1ZzcnJRLklxNlFZNiIsImNyZWF0ZWRfYXQiOiIyMDI0LTA3LTA5VDEwOjQ4OjExLjIwM1oiLCJ1cGRhdGVkX2F0IjoiMjAyNC0wNy0wOVQxMDo0ODoxMS4yMDNaIiwiaWF0IjoxNzIwNTk5MzgyLCJleHAiOjE3NTIxMzUzODJ9.8N5_4RvzbjKir5uuZid7792MrPjPek2BUATb2MMJrrI "
      )
      .send({
        name: "",
        email: "yadavq1@tc.com",
        phone: 1234567890,
        password: "A!123Abcdef@",
      });
    console.log(resp);
    expect(resp.status).toBe(400);
    expect(resp.body.message).toBe("fileds are missing. name");
  });
});

describe("should able to fetch all users from db", () => {
  it("Fetch all the users from DB ", async () => {
    const response = await supertest(app)
    .get("/api/user/allUsers")
    .set(
      "authorization",
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywibmFtZSI6InJhamVzaDEyMzQiLCJwaG9uZSI6MTIzNDU2Nzg5OCwiZW1haWwiOiJ0ZXN0MzEyZXExMkB3ZS5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRNSkdxQVBERW9PelFWZjhmQVMvMndlaG5lUUN6SDNvWWRTdVNQdndtQ1ZzcnJRLklxNlFZNiIsImNyZWF0ZWRfYXQiOiIyMDI0LTA3LTA5VDEwOjQ4OjExLjIwM1oiLCJ1cGRhdGVkX2F0IjoiMjAyNC0wNy0wOVQxMDo0ODoxMS4yMDNaIiwiaWF0IjoxNzIwNTk5MzgyLCJleHAiOjE3NTIxMzUzODJ9.8N5_4RvzbjKir5uuZid7792MrPjPek2BUATb2MMJrrI"
    )
   
  });
});
