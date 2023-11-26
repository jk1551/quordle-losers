export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      post: {
        Row: {
          body: string | null
          created_at: string
          id: number
          tags: string[] | null
          title: string | null
          url: string | null
        }
        Insert: {
          body?: string | null
          created_at?: string
          id?: number
          tags?: string[] | null
          title?: string | null
          url?: string | null
        }
        Update: {
          body?: string | null
          created_at?: string
          id?: number
          tags?: string[] | null
          title?: string | null
          url?: string | null
        }
        Relationships: []
      }
      resulttype: {
        Row: {
          id: number
          name: string
          raw_score: string | null
        }
        Insert: {
          id?: never
          name: string
          raw_score?: string | null
        }
        Update: {
          id?: never
          name?: string
          raw_score?: string | null
        }
        Relationships: []
      }
      scores: {
        Row: {
          createddate: string
          resulttypeid: number | null
          userid: number | null
        }
        Insert: {
          createddate?: string
          resulttypeid?: number | null
          userid?: number | null
        }
        Update: {
          createddate?: string
          resulttypeid?: number | null
          userid?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "scores_resulttypeid_fkey"
            columns: ["resulttypeid"]
            isOneToOne: false
            referencedRelation: "resulttype"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "scores_userid_fkey"
            columns: ["userid"]
            isOneToOne: false
            referencedRelation: "user"
            referencedColumns: ["id"]
          }
        ]
      }
      tag: {
        Row: {
          id: number
          name: string
        }
        Insert: {
          id?: number
          name: string
        }
        Update: {
          id?: number
          name?: string
        }
        Relationships: []
      }
      user: {
        Row: {
          id: number
          name: string
          phone: string | null
        }
        Insert: {
          id?: never
          name: string
          phone?: string | null
        }
        Update: {
          id?: never
          name?: string
          phone?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      score_enum:
        | "5 guesses left"
        | "4 guesses left"
        | "3 guesses left"
        | "2 guesses left"
        | "1 guess left"
        | "no guesses left"
        | "3/4"
        | "2/4"
        | "1/4"
        | "0/4"
      user_enum: "Joe" | "Abby" | "Erin" | "Paul" | "Allie"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
