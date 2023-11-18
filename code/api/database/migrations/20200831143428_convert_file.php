<?php

use think\migration\Migrator;
use think\migration\db\Column;

class ConvertFile extends Migrator
{
    /**
     * Change Method.
     *
     * Write your reversible migrations using this method.
     *
     * More information on writing migrations is available here:
     * http://docs.phinx.org/en/latest/migrations.html#the-abstractmigration-class
     *
     * The following commands can be used in this method and Phinx will
     * automatically reverse them when rolling back:
     *
     *    createTable
     *    renameTable
     *    addColumn
     *    renameColumn
     *    addIndex
     *    addForeignKey
     *
     * Remember to call "create()" or "update()" and NOT "save()" when working
     * with the Table class.
     */
    public function change()
    {
        $table = $this->table('convert_file', array('engine' => 'InnoDB', 'comment' => '转换文件表', 'collation' => 'utf8mb4_general_ci'));
        $table->addColumn('media_id', 'integer', ['default' => 0, 'comment' => '文件id', 'null' => false])
            ->addColumn('file_url', 'string', ['default' => '', 'comment' => '文件链接', 'null' => false])
            ->addColumn('create_time', 'integer', ['default' => 0, 'comment' => '创建时间', 'null' => false])
            ->addColumn('update_time', 'integer', ['default' => 0, 'comment' => '更新时间', 'null' => false])
            ->addIndex(['media_id'], ['unique' => true])
            ->create();
    }
}
